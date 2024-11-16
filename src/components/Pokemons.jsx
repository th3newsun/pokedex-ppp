import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
import PokemonList from "./PokemonList";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const inicial_limit = 40
const increase_limit = 20

const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]) 
    const [pokemonName, setPokemonName] = useState('')
    const [limit, setlimit] = useState(inicial_limit)

    const targetObserver = useRef(null)
    const entry = useIntersectionObserver(targetObserver, {})
    const isVisible = !!entry?.isIntersecting
    
    const pokemonByName = allPokemons.filter((pokemon => pokemon.name.includes(pokemonName))) // filtra os pokemons pelo nome

    const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase())

    useEffect(() => {
        const maxPokemons = pokemonByName.length
        if(isVisible && maxPokemons != 0) {
            const maxPokemons = pokemonByName.length
            const newLimit = limit + increase_limit
            newLimit > maxPokemons ? setlimit(maxPokemons) : setlimit(newLimit);            
        }
    }, [isVisible])

    useEffect(() => {
        setlimit(inicial_limit)
    }, [pokemonName])

    useEffect(() => { 
        axios 
            .get("https://pokeapi.co/api/v2/pokemon?limit=898") // 898 é o número total de pokemons
            .then(({ data }) => setAllPokemons(data.results)) // data.results é o array de pokemons
            .catch((err) => console.log(err)) // caso ocorra um erro, exibe no console
    }, []) // executa a função uma única vez, quando o componente é montado

    return (
        <section className="p-4 py-5"> {/* cria uma seção com padding e padding vertical */}
            <form className='flex gap-3'>
                <div>
                    <Link to='Perfil'>
                        <button type="button"
                        className="bg-red-500 flex rounded-[15px]">
                            <i className="bi bi-person-fill p-4 flex rounded-2xl text-white" style={{ fontSize: '3rem' }}></i>
                        </button>
                    </Link>
                </div>
                <div className="bg-white p-4 w-full flex rounded-[15px] text-lg"> {/* cria um div com fundo branco, padding, flexbox, bordas arredondadas e texto grande */}
                    <input 
                    className="outline-none flex-1" 
                    type="text" 
                    autoComplete='off'
                    placeholder="Pesquise seu pokemon"
                    name='pokemonName'
                    onChange={handleChangePokemonName} /> 

                    <button 
                    type="button" 
                    className="bg-red-600 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-500 transition-colors"> {/* cria um botão com fundo vermelho, padding, bordas arredondadas, sombra e transição de cores */}
                        <i className="bi bi-search text-white px-1" ></i> {/* cria um ícone de busca */}
                    </button>
                </div>
            </form>
            <PokemonList pokemons={pokemonByName.slice(0, limit)}/> {/* renderiza a lista de pokemons */}
            <span ref={targetObserver}></span>
        </section>
    )
}
export default Pokemons;