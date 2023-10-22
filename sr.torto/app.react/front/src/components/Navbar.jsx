// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Se você estiver usando React Router para navegação
import styled from "styled-components"
import GlobalStyle from "../styles/navbar";






const Bloco = styled.header`


  
`;
const Logo = styled.div``;

const Nav = styled.nav``;

const Ul  = styled.ul``

const Li = styled.li``





const Navbar = () => {
  return (
      <>
      

    <Bloco>
    <Nav>
      <Logo><img src="./src/img/logo-torta.png" alt="seila" />aaaaLogo</Logo>
      <Ul>
        <Li><Link to="/home">Home</Link></Li>
        <Li><Link to="/cadastro">Cadastro</Link></Li>
        <Li><Link to="/casco">Casco</Link></Li>
        <Li><Link to="/inicial">Inicial</Link></Li>
        <Li><Link to="/login">Login</Link></Li>
        
      </Ul>
    </Nav>
    </Bloco>
    
      <GlobalStyle/>
      </>
  );
};

export default Navbar;

