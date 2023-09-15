import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Teste from './routes/Teste.jsx';
import Inicial from './routes/Inicial.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Casco from './routes/Casco.jsx';
import Login from './routes/Login.jsx';
import Admin from './routes/Admin.jsx';

import { AuthContext } from './contexts/auth.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children:[
      {
        path: "/",
        element : <Login/>,
      },
    
      {
        path: "/teste",
        element : <Teste/>,
      },
    
      {
        path: "/cadastro",
        element : <Cadastro/>,
      },


       {
         path: "/login",
         element : <Login/>,
       },
       {
        path: "/casco",
        element : <Casco/>,
       },

       {
        path: "/admin",
        element : <Admin/>,
       },


    ]}
    
  ])
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
