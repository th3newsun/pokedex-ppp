import React from 'react'
import { Link } from 'react-router-dom'

const SingUpForm = () => {

  return (
    <section className='flex flex-col items-center justify-start mt-11'>
        <div>
            <h1 className='font-bold font-outfit text-[35px] mb-10 mt-5'>Novo por aqui?</h1>
            <hr class="border-t-[2px] border-black w-56 mx-full mb-8"></hr>
        </div>
        <Link to='/SingUp'>
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold font-outfit py-3 px-14 rounded focus:outline-none focus:shadow-outline">Criar conta</button>
        </Link>
        
    </section>
  )
}

export default SingUpForm
