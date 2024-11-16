import React from 'react';
import PokemonDetail from "./PokemonDetail";
import { colorByType } from "../constants/pokemon";

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section className={`fixed top-0 left-1/2 transform -translate-x-1/2 h-screen transition-all duration-500 right-0 w-[80%]
    ${showModal ? "visible opacity-100" : "invisible opacity-0"} 
    ${colorByType[pokemon?.types[0]]} `}>
      <button onClick={onCloseModal}>
        <i className='bi bi-x bg-white absolute top-4 right-4 text-4xl p-1 rounded-lg hover:opacity-80 transition-opacity'></i>
      </button>
      <article className={`bg-white h-[85%] absolute w-[99%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 
      ${showModal ? "bottom-0" : "-bottom-full"} left-1/2 transform -translate-x-1/2`}>
        <PokemonDetail pokemon={pokemon} />
      </article>
    </section>
  );
};

export default ModalPokemon;