import Pokemons from "../components/Pokemons";
import backgroundImage from '../assets/background.png';
import ModalPokemon from "../components/ModalPokemon";
import { usePokemonContext } from "../hooks/usePokemonContext";

const Home = () => {
    const { showDetailPokemon, closePokemonDetail, pokemonDetail } = usePokemonContext();
    return (
        <section
            className="bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <main className="max-w-[1400px] mx-auto">
                <Pokemons />
                <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail} pokemon={pokemonDetail} />
            </main>
        </section>
    );
};

export default Home;