
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";


import "react-toastify/dist/ReactToastify.css";

import  Navbarra  from "./components/Navbar";
import Teste from "./routes/Teste";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`;

const Title = styled.h2``;


function App() {
  return (
    <>
    
      
        
      <Navbarra/>
      <Container>
      <Outlet/>
       </Container>
        
      

      <Title>Footer</Title> 
      
     
      <GlobalStyle />
      
    </>
  );
}

export default App;
