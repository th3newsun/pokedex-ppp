import React from 'react';
import PokemonPreview from './PokemonPreview';

const PokemonList = ({ pokemons }) => {
    return (
        <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5'>
            {
            pokemons.map((pokemon) => (<PokemonPreview key={pokemon.url} pokemonURL={pokemon.url} />))
            }
        </section>
    );
};

export default PokemonList;