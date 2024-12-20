import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig.js'; 
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Home');
    } catch (error) {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <section>
      <form className="bg-[#dce6e7] p-5 rounded-2xl h-full flex flex-col items-center" onSubmit={handleSubmit}>
        <h1 className='font-bold font-outfit text-[1.82vw] mt-3'>LOGIN</h1>
        <hr className="border-t-[2px] border-black w-full mt-8 mb-8"></hr>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            className="shadow appearance-none font-outfit border rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <hr className="border-t-[2px] border-black w-full mt-8 mb-8"></hr>

        {}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-500 text-white text-[1vw] font-bold font-outfit py-3 px-14 mb-3 rounded focus:outline-none focus:shadow-outline"
        >
          Entrar
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
