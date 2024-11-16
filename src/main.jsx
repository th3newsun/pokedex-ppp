import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './routes/HomePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import SingUpPage from './routes/SingUpPage.jsx';
import PerfilPage from './routes/PerfilPage.jsx';
import { PokemonProvider } from './context/PokemonContext.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'Home',
          element: <HomePage />,
        },
        {
          path: 'SingUp',
          element: <SingUpPage />,
        },
        {
          path: 'Home/Perfil',
          element: <PerfilPage />,
        },
        {
          path: '/',
          element: <LoginPage />,
        }
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  </React.StrictMode>,
);