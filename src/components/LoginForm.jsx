import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="bg-[#dce6e7] p-6 rounded-2xl w-[300px] h-[525px] flex flex-col items-center shadow-md">
        <h1 className='font-bold font-outfit text-[35px] mb-10 mt-5'>LOGIN</h1>
        <hr class="border-t-[2px] border-black w-56 mx-full mb-8"></hr>
        <div className="mb-4 w-full">
          <input type="email" name="email" placeholder="Email" required className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <input type="password" name="password" placeholder="Senha" required className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 mb-5 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <hr class="border-t-[2px] border-black w-56 mx-full mb-14"></hr>
        <Link to='Home'>
          <button type="submit" className="bg-red-600 hover:bg-red-500 text-white text-lg font-bold font-outfit py-3 px-14 rounded focus:outline-none focus:shadow-outline">Entrar</button>
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
