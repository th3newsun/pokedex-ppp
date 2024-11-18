import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SingUpPageForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.error(err.message);
      setError('Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <section>
      <div className="bg-white col-start-2 w-full p-7">
        <h1 className="font-bold font-outfit text-[25px] cursor-default">Cadastre-se</h1>
        <hr className="border-t-[2px] border-black mt-4 mb-4"></hr>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <h2 className="font-outfit text-[20px] mb-2 mt-4 block cursor-default">Email</h2>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="appearance-none font-outfit border border-gray-400 rounded w-full h-[54px] py-5 px-4 text-gray-700 mb-2 focus:outline-none"
            />
          </div>

          <h2 className="font-outfit text-[20px] mb-2 mt-4 block cursor-default">Senha</h2>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            className="appearance-none font-outfit border border-gray-400 rounded w-full h-[54px] py-5 px-4 text-gray-700 focus:outline-none"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold font-outfit py-3 px-14 mt-7 rounded focus:outline-none focus:shadow-outline"
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SingUpPageForm;
