import { usePokemonContext } from "../hooks/usePokemonContext";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { colorByType } from "../constants/pokemon";

const Evolutions = ({ evolutions }) => {
  const { showPokemon } = usePokemonContext();

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {evolutions.map((evolution, index) => (
        <article key={evolution.name} className="flex gap-2 items-center">
          {index !== 0 && (
            <div className="bg-slate-100 p-2 rounded-full text-sm font-bold font-outfit">
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}
          <button
            onClick={() => showPokemon(evolution.pokemonInfo)}
            className="hover:bg-slate-100 transition-colors rounded-3xl"
          >
            <img src={evolution.image} alt="" />
          </button>
        </article>
      ))}
    </div>
  );
};

const PokemonPreview = ({ pokemonURL, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [pokemonURL]);

  return (
    <article onClick={() => onClick(pokemon)} className='text-center bg-white rounded-[15px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/20 border-2 border-transparent hover:border-slate-300 cursor-pointer group grid gap-2'>
      <header className='h-24'>
        <img className='absolute left-1/2 -translate-x-1/2 top-[70px] -translate-y-1/2 group-hover:scale-110 transition-transform h-32' src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
      </header>
      <span className='text-sm font-outfit text-slate-400 mt-7'>N° {pokemon?.id}</span>
      <h4 className='text-xl font-outfit mb-1'>{pokemon?.name}</h4>
      <ul className='flex font-outfit gap-3 justify-center'>
        {pokemon?.types.map(type => (
          <li className={`p-2 rounded-md px-3 text-white text-sm ${colorByType[type.type.name]}`} key={type.type.name}>
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Evolutions;
export { PokemonPreview };
