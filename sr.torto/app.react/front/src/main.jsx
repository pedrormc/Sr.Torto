import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import jwtDecode from 'jwt-decode';

import Home from './routes/Home.jsx';
import Inicial from './routes/Inicial.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Casco from './routes/Casco.jsx';
import Login from './routes/Login.jsx';
import Admin from './routes/Admin.jsx';

import { AuthContext } from './contexts/auth.jsx';

function isUserAuthenticated(){
  try{
    const allTokens = document.cookie.split(";");
    let tokenJWT;

    for(let i = 0; i < allTokens.length; i++){
      allTokens[i] = allTokens[i].split("=")
      if(allTokens[i].indexOf("token") !== -1 || allTokens[i].indexOf(" token") !== 1){
        tokenJWT = allTokens[i][1];
      }
    }

    const jwtData = jwtDecode(tokenJWT);
    return true;
  }
  catch{
    return false;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children:[
      {
        path: "/",
        element : <Inicial/>,
      },

      {
        path: "/inicial",
        element : <Inicial/>,
      },
    
      {
        path: "/home",
        element : <Home/>,
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
