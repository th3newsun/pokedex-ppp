import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PokemonList from "./PokemonList";

const Pokemons = () => { // cria um componente Pokemons
    const [allPokemons, setAllPokemons] = useState([]) // cria um estado para armazenar os pokemons
    useEffect(() => { 
        axios 
            .get("https://pokeapi.co/api/v2/pokemon?limit=151") // 898 é o número total de pokemons
            .then(({ data }) => setAllPokemons(data.results)) // data.results é o array de pokemons
            .catch((err) => console.log(err)) // caso ocorra um erro, exibe no console
    }, []) // executa a função uma única vez, quando o componente é montado

    return (
        <section className="p-4 py-5"> {/* cria uma seção com padding e padding vertical */}
            <form>
                <div className="bg-white p-4 flex rounded-2xl text-lg"> {/* cria um div com fundo branco, padding, flexbox, bordas arredondadas e texto grande */}
                    <input 
                    className="outline-none flex-1" 
                    type="text" 
                    placeholder="Pesquise seu pokemon" /> {/* cria um campo de entrada de texto com placeholder */}

                    <button 
                    type="button" 
                    className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"> {/* cria um botão com fundo vermelho, padding, bordas arredondadas, sombra e transição de cores */}
                    
                    <i className="bi bi-search text-white px-1" ></i> {/* cria um ícone de busca */}
                    </button>
                </div>
            </form>
            <PokemonList pokemons={allPokemons}/> {/* renderiza a lista de pokemons */}
        </section>
    )
}
export default Pokemons;