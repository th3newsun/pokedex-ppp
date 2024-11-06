import React from 'react';

const PokemonList = ({ pokemons }) => {
    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;