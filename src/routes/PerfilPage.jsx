import React from 'react'
import backgroundImage from '../assets/background.png';
import MalePerfil from '../assets/MalePerfil.png';
import FemalePerfil from '../assets/FemalePerfil.png';

const PerfilPage = () => {
    return (
        <section className="bg-cover bg-fixed bgattachment-fixed bg-center min-h-screen w-screen "
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className='flex justify-center items-center'>
                <div className='w-[98vw] h-[95vh] border-4 mt-4 border-red-500 rounded-xl flex gap-2'>
                    <div className='w-[24vw] h-[88vh] p-4 mt-5 mb-5 ml-5 border-4 border-red-500 rounded-xl bg-gray-400 bg-opacity-60'
                        style={{
                            backgroundImage: `url(${MalePerfil})`,
                            backgroundSize: '60%',
                            backgroundPosition: 'center 75%',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        <h1 className='bg-blue-700 text-white font-outfit text-xl rounded-lg p-1 flex justify-center'>Treinador Masculino</h1>
                    </div>
                    <div className='w-[16vw] h-[88vh] p-4 mt-5 mb-5 border-4 border-red-500 rounded-xl bg-gray-400
                    bg-opacity-60'>
                        <h1 className='bg-blue-700 text-white font-outfit text-xl rounded-lg p-1 flex justify-center'>Info</h1>
                    </div>
                    <div className='w-[54vw] h-[88vh] p-4 mt-5 mb-5 border-4 border-red-500 rounded-xl bg-gray-400 bg-opacity-60'>
                        <h1 className='bg-blue-700 text-white font-outfit text-xl rounded-lg p-1 flex justify-center'>Pokemons</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PerfilPage
