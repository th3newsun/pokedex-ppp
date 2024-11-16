import React from 'react';
import LoginForm from '../components/LoginForm';
import backgroundImage from '../assets/background.png';
import pokemonImage from '../assets/pokemonsLogin.png';
import pokebookLogo from '../assets/pokebookLogo.png';
import SingUpLoginPageForm from '../components/SingUpLoginPageForm';
import { useEffect } from 'react';

const Login = () => {
    return (
        <section
            className="bg-cover bg-fixed bg-center h-screen w-screen overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='grid grid-cols-2 h-full'>
                <div className='flex items-center justify-center relative h-screen p-6'>
                    <div className='absolute w-[550px] h-[118px] -top-5'>
                        <img src={pokebookLogo} className='' alt="pokebook image" />
                    </div>
                    <div className='bg-white rounded-3xl p-[20px] 
                   mt-16 gap-1 grid grid-cols-2 shadow-lg'>
                        <LoginForm />
                        <SingUpLoginPageForm />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={pokemonImage} className='h-screen' alt="pokebook login image" />
                </div>
            </div>
        </section>
    );
};

export default Login;