import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <section>
      <form className="bg-[#dce6e7] p-5 rounded-2xl h-full flex flex-col items-center">
        <h1 className='font-bold font-outfit text-[1.82vw] mt-3'>LOGIN</h1>
        <hr class="border-t-[2px] border-black w-full mt-8 mb-8"></hr>
        <div>
          <input type="email" name="email" placeholder="Email" required className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" />
          
          <input type="password" name="password" placeholder="Senha" required className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <hr class="border-t-[2px] border-black w-full mt-8 mb-8"></hr>
        <Link to='Home'>
          <button type="submit" className="bg-red-600 hover:bg-red-500 text-white text-[1vw] font-bold font-outfit py-3 px-14 mb-3 rounded focus:outline-none focus:shadow-outline">Entrar</button>
        </Link>
      </form>
    </section>
  )
}

export default LoginForm
