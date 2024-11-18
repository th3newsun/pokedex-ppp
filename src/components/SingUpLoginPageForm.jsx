import React from 'react'
import { Link } from 'react-router-dom'

const SingUpLoginPageForm = () => {

  return (
    <section>
        <form className="p-5 rounded-2xl flex flex-col items-center h-full">
            <h1 className='font-bold font-outfit mt-3 text-[1.82vw]'>Novo por aqui?</h1>
            <hr className="border-t-[2px] border-black w-full mt-8 mb-8"></hr>

          <Link to='/SingUp' className="w-full flex justify-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-[1vw] font-bold font-outfit py-3 px-14 rounded focus:outline-none focus:shadow-outline">Criar conta</button>
          </Link>
        </form>
    </section>
  )
}

export default SingUpLoginPageForm
 