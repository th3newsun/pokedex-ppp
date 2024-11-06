import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Pokemons = () => { // cria um componente Pokemons
    const [allPokemons, setAllPokemons] = useState([]) // cria um estado para armazenar os pokemons
    useEffect(() => { 
        axios 
            .get("https://pokeapi.co/api/v2/pokemon?limit=151") // 898 é o número total de pokemons
            .then(({ data }) => setAllPokemons(data.results)) // data.results é o array de pokemons
            .catch((err) => console.log(err)) // caso ocorra um erro, exibe no console
    }, []) // array vazio para executar apenas uma vez

    return <section className="p-4 py-5 flex rounded-2xl text-lg">
        <form>
            <div className="bg-white p-4 flex-1">
                <input className="outline-none" type="text" placeholder="Pesquise seu pokemon" />
                <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
                    <IconSearch color="white" stroke={3} />
                </button>
            </div>
        </form>
    </section>
}
export default Pokemons;