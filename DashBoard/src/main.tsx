import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home/home.tsx';
import ContatoPage from './pages/Contato/contato.tsx';
import SobrePage from './pages/Sobre/sobre.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
    {
      path: "/home",
      element: <HomePage/>,
    },
    {
      path: "/contato",
      element: <ContatoPage/>,
    },
    {
      path: "/sobre",
      element: <SobrePage/>,
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
