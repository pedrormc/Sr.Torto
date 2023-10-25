// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Se você estiver usando React Router para navegação
import styled from "styled-components"
import "../styles/Navbar.css";
import image from '../img/logo-torta.png'







const Bloco = styled.header`
background-color: #E4EFF8;
width:100%


`;

const Logo = styled.div`

  
    
   

`;

const Nav = styled.nav`
list-style-type:none;
    margin: 0px;
    padding: 0px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width:100%
`;

const Ul  = styled.ul`
list-style-type: none;
    margin: 0px;
    padding: 0;
    border: 0;
    overflow: hidden;
    background-color: #E4EFF8;
    text-align: center;
`

const Li = styled.li`
float: left;

margin: 0px 50px ;



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
    margin-bottom: 0px;
    margin-top: 33px;
    text-decoration: none;
    border-bottom: 5px ;
    

};`





const Navbarra = () => {
  return (
      <>
      
      
    <Bloco>
    
    <Nav>
    <Logo><img src={image} alt="seila" /></Logo>
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

