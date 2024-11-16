import Pokemons from "../components/Pokemons";
import backgroundImage from '../assets/background.png';
import ModalPokemon from "../components/ModalPokemon";
import { usePokemonContext } from "../hooks/usePokemonContext";

const Home = () => {
    const { showDetailPokemon, closePokemonDetail, pokemonDetail } = usePokemonContext();
    return (
        <section className="bg-cover bg-fixed bgattachment-fixed bg-center min-h-screen w-screen overflow-x-hidden overflow-y-auto" 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            <main className="max-w-[1400px] mx-auto">
                <Pokemons />
                <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail} pokemon={pokemonDetail} />
            </main>
        </section>
    );
};

export default Home;