
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

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
        
      <Title>Navbar</Title>

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
