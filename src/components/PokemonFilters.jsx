import React, { useState } from 'react';

const PokemonFilters = ({ onFilterChange }) => {
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterClick = (filter) => {
        onFilterChange(filter);
        setShowFilters(false);
    };

    return (
        <div>
            <button
                type="button"
                className="bg-red-600 p-2 rounded-xl shadow-md shadow-red-500/50 hover:bg-red-500 transition-colors"
                style={{ fontSize: '2rem' }}
                onClick={() => setShowFilters(!showFilters)}
            >
                <i className="bi bi-filter-square text-white"></i>
            </button>

            {showFilters && (
                <div className='relative'>
                    <div className="absolute mt-[22px] flex gap-2 right-[0%]">
                        <button
                            type="button"
                            className="bg-blue-600 flex gap-1 p-2 rounded-xl shadow-md shadow-blue-500/50 hover:bg-blue-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('PesoCrescente')}
                        >
                            Peso <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-blue-600 flex gap-1 p-2 rounded-xl shadow-md shadow-blue-500/50 hover:bg-blue-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('PesoDecrescente')}
                        >
                            Peso <i className="bi bi-arrow-down"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-green-600 flex gap-1 p-2 rounded-xl shadow-md shadow-green-500/50 hover:bg-green-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('AlturaCrescente')}
                        >
                            Altura <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-green-600 flex gap-1 p-2 rounded-xl shadow-md shadow-green-500/50 hover:bg-green-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('AlturaDecrescente')}
                        >
                            Altura <i className="bi bi-arrow-down"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-purple-600 flex gap-1 p-2 rounded-xl shadow-md shadow-purple-500/50 hover:bg-purple-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('NumeroCrescente')}
                        >
                            Numero <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-purple-600 flex gap-1 p-2 rounded-xl shadow-md shadow-purple-500/50 hover:bg-purple-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('NumeroDecrescente')}
                        >
                            Numero <i className="bi bi-arrow-down"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-orange-600 flex gap-1 p-2 rounded-xl shadow-md shadow-orange-500/50 hover:bg-orange-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('NomeCrescente')}
                        >
                            Nome <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-orange-600 flex gap-1 p-2 rounded-xl shadow-md shadow-orange-500/50 hover:bg-orange-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('NomeDecrescente')}
                        >
                            Nome <i className="bi bi-arrow-down"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-cyan-600 flex gap-1 p-2 rounded-xl shadow-md shadow-cyan-500/50 hover:bg-cyan-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('PoderCrescente')}
                        >
                            Poder <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-cyan-600 flex gap-1 p-2 rounded-xl shadow-md shadow-cyan-500/50 hover:bg-cyan-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('PoderDecrescente')}
                        >
                            Poder <i className="bi bi-arrow-down"></i>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 p-2 rounded-xl shadow-md shadow-yellow-500/50 hover:bg-yellow-500 transition-colors text-white font-outfit"
                            onClick={() => handleFilterClick('type')}
                        >
                            Tipo
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 flex p-2 rounded-xl shadow-md shadow-gray-500/50 hover:bg-gray-400 transition-colors text-white font-outfit whitespace-nowrap"
                            onClick={() => handleFilterClick(null)}
                        >
                            Sem Filtro
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokemonFilters;