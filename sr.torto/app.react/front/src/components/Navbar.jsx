// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Se você estiver usando React Router para navegação
import styled from "styled-components"






const Bloco = styled.div`
  width: 1900px;
  height: 15%;
  margin-top: 20px;
  display: flex;
 border : 2px solid black;

  
`;
const Logo = styled.div`
  

  
`;

const Nav = styled.nav`
  list-style-type: none;
  width: 100%;
  height: 100%;
  text-align: right;
  display:flex;
  
`;
const Ul  = styled.ul`
list-style-type: none;
margin:0;
padding:0;
overflow: hidden;
background-color: #ff8c00;
text-align: center;
display:flex;
`
const Li = styled.li`
display: block;
color: rgb(0,0,0);
text-align: center;
padding : 18px 30px;
text-decoration: none;
`



const Navbar = () => {
  return (
      
    <Bloco>
    <Nav>
      <Logo><img src="./src/img/papa.jpg" alt="seila" />aaaaLogo</Logo>
      <Ul>
        <Li><Link to="/home">Home</Link></Li>
        <Li><Link to="/cadastro">Cadastro</Link></Li>
        <Li><Link to="/casco">Casco</Link></Li>
        <Li><Link to="/inicial">Inicial</Link></Li>
        <Li><Link to="/login">Login</Link></Li>
        
      </Ul>
    </Nav>
    </Bloco>
  );
};

export default Navbar;

