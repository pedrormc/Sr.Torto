
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import Login from "./routes/Login";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './contexts/auth.jsx';
import  Navbar  from "./components/Navbar";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`;
const Title = styled.h2``;


function App() {
  return (
    <>
    
      
        
      <Navbar/>
      <Container>

       </Container>
        <Outlet/>
      <Container>

      <Title>Footer</Title> 
      
      </Container>
      <GlobalStyle />
      
    </>
  );
}

export default App;
