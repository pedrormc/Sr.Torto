// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Se você estiver usando React Router para navegação
import styled from "styled-components"
import "../styles/Navbar.css";
import image from '../img/logo-torta.png'







const Bloco = styled.header`
background-color: #E4EFF8;
width:100%;

z-index: 1000;


`;

const Logo = styled.div`

  width: min-content;
    
   

`;

const Nav = styled.nav`
list-style-type:none;
    margin: 0px;
    padding: 0px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    
    justify-content: space-between;
    background-color:#E4EFF8;
`;

const Ul  = styled.ul`
list-style-type: none;
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    background-color: #E4EFF8;
    text-align: right;
    right: 0px;
    width: 50%;
`

const Li = styled.li`
float: right;







& :hover{
  background-color: #99b3bd;
    color: #000000;
    border-bottom: solid 8px #000000;
    
    
    
}
a {
  
  display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 18px 30px;
    margin: 0px;
    padding-top: 45px;
    padding-bottom: 45px;
    text-decoration: none;
    border-bottom: solid 8px #6D8F9B;
    font-size: 22px;
    

};`





const Navbarra = () => {
  return (
      <>
      
      
    <Bloco>
    
    <Nav>
    <Logo ><Link to="/inicial"><img src={image} alt="seila" /></Link>
    
    </Logo>
      <Ul>
        <Li><Link to="/home">Home</Link></Li>
        <Li><Link to="/login">Cadastro/Login</Link></Li>
        <Li><Link to="/casco">Casco</Link></Li>
        <Li><Link to="/inicial">Inicial</Link></Li>
        
        
      </Ul>
    </Nav>
    </Bloco>
    
    
     
      </>
  );
};

export default Navbarra;

