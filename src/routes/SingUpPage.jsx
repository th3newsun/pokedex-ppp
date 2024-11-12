import React from 'react'
import backgroundImage from '../assets/background.png'
import SingUpPageForm from '../components/SingUpPageForm'
import fotoMew from '../assets/fotoMew.png'
import fotoGengar from '../assets/fotoGengar.png'

const SingUpPage = () => {
    return (
        <section 
            className="bg-cover bg-fixed bg-center h-screen w-screen overflow-hidden" 
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='grid grid-cols-3 items-center h-screen'>
                <div className='col-start-1 '>
                    <img src={fotoMew} alt="Mew" className='' />
                </div>
                <div className='col-start-2'>
                    <SingUpPageForm />
                </div>
                <div className=' col-start-3'>
                    <img src={fotoGengar} alt="Gengar" className='' />
                </div>
            </div>
        </section>
    )
}

export default SingUpPage
