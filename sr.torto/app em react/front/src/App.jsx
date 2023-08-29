
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import Form from "./components/Form.jsx";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
      <Container>
        
      <Title>USUÁRIOS</Title>

      </Container>
      <GlobalStyle />
        
    </>
  );
}

export default App;
