import Pokemons from "../components/Pokemons";
import Aside from "../components/Aside";
import backgroundImage from '../assets/background.png';

const Home = () => {
    return (
        <section className="bg-cover bg-fixed bgattachment-fixed bg-center min-h-screen w-screen" 
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
            }}>
            <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
                <Pokemons />
                <Aside />
            </main>
        </section>
    );
};

export default Home;