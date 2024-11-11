import React from 'react'
import fotoGengar from '../assets/fotoGengar.png'
import fotoMew from '../assets/fotoMew.png'

const SingUpPageForm = () => {
  return (
    <section className='grid grid-cols-3 items-center justify-start mt-11'>
      <div className='flex justify-center'>
        <img src={fotoMew} alt="Mew" className='h-[668px]' />
      </div>
      <div className='bg-white col-start-2 col-span-1 h-[668px] w-full p-7'>
        <h1 className='font-bold font-outfit text-[25px] cursor-default'>Cadastre-se</h1>
        <hr className="border-t-[2px] border-black mt-4 mb-4"></hr>
        <h2 className='font-outfit text-[20px] mb-2 mt-4 block cursor-default'>Nome</h2>
        <div className="flex gap-3 justify-center mt-2">
          <input type="text" name="firstName" placeholder="Nome" required className="appearance-none font-outfit rounded py-5 px-4 text-gray-700 leading-tight focus:outline-none h-[54px] w-[50%] border border-gray-400" />

          <input type="text" name="lastName" placeholder="Sobrenome" required className="appearance-none font-outfit rounded py-5 px-4 text-gray-700 focus:outline-none h-[54px] w-[50%] border border-gray-400" />
        </div>
        <h2 className='font-outfit text-[20px] mb-2 mt-4 block cursor-default'>Email</h2>
        <div>
          <input type="email" name="email" placeholder="Email" required className="appearance-none font-outfit border border-gray-400 rounded w-full h-[54px] py-5 px-4 text-gray-700 mb-2 focus:outline-none" />
        </div>

        <h2 className='font-outfit cursor-default text-[20px] mb-2 mt-4 block' >Gênero</h2>
        <fieldset className='flex justify-center gap-3'>
          <div className="border border-gray-400 rounded h-[35px] w-[50%] flex items-center">
            <input type="radio" id="male" name="gender" value="male" className="ml-3" />
              <label htmlFor="male" className="font-outfit p-3 text-[17px] text-gray-500">Masculino</label>
          </div>
          <div className='border border-gray-400 rounded h-[35px] w-[50%] flex items-center'>
              <input type="radio" id="female" name="gender" value="female" className="ml-3" />
                <label htmlFor="female" className='font-outfit p-3 text-[17px] text-gray-500'>Feminino</label>
          </div>
        </fieldset>  
        <h2 className='font-outfit text-[20px] mb-2 mt-4 block cursor-default'>Senha</h2> 
        <input type="password" name="password" placeholder="Senha" required className="appearance-none font-outfit border border-gray-400 rounded w-full h-[54px] py-5 px-4 text-gray-700 mb-2 focus:outline-none" />
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold font-outfit py-3 px-14 mt-11 rounded focus:outline-none focus:shadow-outline">Criar conta</button>
        </div>
      </div>
      <div className='flex justify-center'>
        <img src={fotoGengar} alt="Gengar" className='h-[668px]' />
      </div>
    </section>
  );
};

export default SingUpPageForm

