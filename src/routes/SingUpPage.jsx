import React from 'react'
import backgroundImage from '../assets/background.png'
import SingUpPageForm from '../components/SingUpPageForm'

const SingUpPage = () => {
    return (
        <section 
            className="bg-cover bg-fixed bg-center h-screen w-screen overflow-hidden" 
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div>
                <SingUpPageForm />
            </div>
        </section>
    )
}

export default SingUpPage
