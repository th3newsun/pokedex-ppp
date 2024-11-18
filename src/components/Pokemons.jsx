import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import PokemonFilters from "./PokemonFilters";

const inicial_limit = 40;
const increase_limit = 20;

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [limit, setLimit] = useState(inicial_limit);
  const [filter, setFilter] = useState(null);

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemonByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName));

  const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    const maxPokemons = pokemonByName.length;
    if (isVisible && maxPokemons !== 0) {
      const newLimit = limit + increase_limit;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible]);

  useEffect(() => {
    setLimit(inicial_limit);
  }, [pokemonName]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            const statsTotal = pokemonDetails.data.stats.reduce((total, stat) => total + stat.base_stat, 0);
            return {
              ...pokemon,
              id: pokemonDetails.data.id,
              weight: pokemonDetails.data.weight,
              height: pokemonDetails.data.height,
              types: pokemonDetails.data.types,
              statsTotal: statsTotal,
            };
          })
        );
        setAllPokemons(detailedPokemons);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (filter !== null) {
      const sortedPokemons = [...allPokemons].sort((a, b) => {
        if (filter === 'PesoDecrescente') {
          return b.weight - a.weight;
        } if (filter === 'PesoCrescente') {
          return a.weight - b.weight;
        } else if (filter === 'AlturaDecrescente') {
          return b.height - a.height;
        } else if (filter === 'AlturaCrescente') {
          return a.height - b.height;
        } else if (filter === 'type') {
          const aType = a.types && a.types[0] ? a.types[0].type.name : '';
          const bType = b.types && b.types[0] ? b.types[0].type.name : '';
          return aType.localeCompare(bType);
        } else if (filter === 'NumeroCrescente') {
          return a.id - b.id;
        } else if (filter === 'NumeroDecrescente') {
          return b.id - a.id;
        } else if (filter === 'NomeCrescente') {
          return a.name.localeCompare(b.name);
        } else if (filter === 'NomeDecrescente') {
          return b.name.localeCompare(a.name);
        } else if (filter === 'PoderCrescente') {
          return a.statsTotal - b.statsTotal;
        } else if (filter === 'PoderDecrescente') {
          return b.statsTotal - a.statsTotal;
        }
        return 0;
      });
      setAllPokemons(sortedPokemons);
    } else {
      // Recarregar a lista original de Pokémon para remover filtros
      const fetchPokemons = async () => {
        try {
          const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
          const detailedPokemons = await Promise.all(
            data.results.map(async (pokemon) => {
              const pokemonDetails = await axios.get(pokemon.url);
              const statsTotal = pokemonDetails.data.stats.reduce((total, stat) => total + stat.base_stat, 0);
              return {
                ...pokemon,
                id: pokemonDetails.data.id,
                weight: pokemonDetails.data.weight,
                height: pokemonDetails.data.height,
                types: pokemonDetails.data.types,
                statsTotal: statsTotal,
              };
            })
          );
          setAllPokemons(detailedPokemons);
        } catch (err) {
          console.log(err);
        }
      };

      fetchPokemons();
    }
  }, [filter]);

  return (
    <section className="p-4 py-5">
      <form className='flex gap-3'>
        <div>
          <Link to='Perfil'>
            <button type="button" className="bg-red-600 hover:bg-red-500 shadow-red-500/50 shadow-md flex rounded-[15px]">
              <i className="bi bi-person-fill p-4 flex rounded-2xl text-white" style={{ fontSize: '3rem' }}></i>
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 w-full flex rounded-[15px] text-lg gap-3">
          <input
            className="outline-none flex-1"
            type="text"
            autoComplete='off'
            placeholder="Pesquise seu pokemon"
            name='pokemonName'
            onChange={handleChangePokemonName}
          />
          <button
            type="button"
            className="bg-red-600 p-2 rounded-xl shadow-md shadow-red-500/50 hover:bg-red-500 transition-colors"
            style={{ fontSize: '1.5rem' }}
          >
            <i className="bi bi-search text-white px-1"></i>
          </button>
          <PokemonFilters onFilterChange={setFilter} />
        </div>
      </form>
      <PokemonList pokemons={pokemonByName.slice(0, limit)} />
      <span ref={targetObserver}></span>
    </section>
  );
};

export default Pokemons;