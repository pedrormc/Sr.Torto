
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import Login from "./routes/Login";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './contexts/auth.jsx';


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

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


// function App() {
//   const [token, setToken] = useState();
//   if(!token) {





    
//     return(
//     <>
//       <Container>
        
//       <Title>Navbar</Title>

//       </Container>
//       <Login setToken={setToken} />
//       <Container>

//       <Title>Footer</Title>
      
//       </Container>
//       <GlobalStyle />
      
    
    
//     </>
//     ) 
//   }
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
