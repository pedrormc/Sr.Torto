// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Se você estiver usando React Router para navegação
import styled from "styled-components"
import "../styles/Navbar.css";
import image from '../img/logo-torta.png'







const Bloco = styled.header`
background-color: #E4EFF8;
height: 100px;
width : 1000px;
`;

const Logo = styled.div`


`;

const Nav = styled.nav`
list-style-type:none;
    margin: 0px;
    padding: 0px;
    display: flex;
    width: 100%;
    position: fixed;
  top: 0;
  left: 0;
`;

const Ul  = styled.ul`
list-style-type: none;
margin: 0px;
padding-top: 20px;
padding-left: 570px;
overflow: hidden;
background-color: #E4EFF8;
text-align: center;
width: 50px;
`

const Li = styled.li`
float: left;
padding: 5px;
margin: 0px 50px ;
border: 0px ;
width: 100px;

& :hover{
  background-color: #99b3bd;
    color: #000000;
    border-bottom: solid 5px #000000;
    
    
}
a {
  display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 18px 30px;
    text-decoration: none;
    padding: 0px;

};`





const Navbarra = () => {
  return (
      <>
      
      
    <Bloco>
    <Logo><img src={image} alt="seila" /></Logo>
    <Nav>
      
      <Ul>
        <Li><Link to="/home">Home</Link></Li>
        <Li><Link to="/cadastro">Cadastro</Link></Li>
        <Li><Link to="/casco">Casco</Link></Li>
        <Li><Link to="/inicial">Inicial</Link></Li>
        <Li><Link to="/login">Login</Link></Li>
        
      </Ul>
    </Nav>
    </Bloco>
    
    
     
      </>
  );
};

export default Navbarra;

