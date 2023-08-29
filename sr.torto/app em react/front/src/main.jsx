import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Teste from './routes/Teste.jsx';
import Inicial from './routes/Inicial.jsx';
import Login from './routes/Login.jsx';


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
        path: "/teste",
        element : <Teste/>,
      },
    
      {
        path: "/login",
        element : <Login/>,
      },
    ]}
    
  ])
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
