import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import "../styles/Login.css";

const Container = styled.div`
  background-color: rgb(146, 144, 144);
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(170, 170, 170, 0.25),
    0 10px 10px rgba(102, 102, 102, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

const Overlay = styled.div`
  background: #f2eee3;
  background: -webkit-linear-gradient(to right, #000000, #8011ca);
  background: linear-gradient(to right, #6a8084, rgb(90, 128, 128));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: black;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [values, setValues] = useState({
    email: "",
    senha: "",
    name: ""
  });

  const handleTogglePanel = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleLogin = async () => {
    try {
      const response = await Axios.post("https://api-c0ie.onrender.com/login", {
        email: values.email,
        senha: values.senha
      });
      alert(response.data.msg);
      if (response.data.authorized) {
        const tokenExpiration = new Date(new Date().getTime() + 3600 * 1000);
        document.cookie = `token=${response.data.accessToken}; expires=${tokenExpiration.toUTCString()}; path=/`;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = () => {
    Axios.post("https://api-c0ie.onrender.com/user", {
      nickname: values.name,
      email: values.email,
      senha: values.senha
    }).then((response) => {
      alert(response.data);
      console.log(response);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <Container>
      <FormContainer className={`form-container ${isSignUpActive ? "sign-up-container" : "sign-in-container"}`}>
        <form action="#">
          <h1 className="texto-pixel">{isSignUpActive ? "Criar conta" : "Login"}</h1>
          <div className="social-container"></div>
          {isSignUpActive && <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />}
          <input type="email" placeholder="Email" name="email" onChange={handleInputChange} />
          <input type="password" placeholder="Password" name="senha" onChange={handleInputChange} />
          {isSignUpActive ? (
            <button onClick={handleRegister}>Criar</button>
          ) : (
            <button onClick={handleLogin}>Entrar</button>
          )}
        </form>
      </FormContainer>
      <OverlayContainer className="overlay-container">
        <Overlay className="overlay">
          <OverlayPanel className={`overlay-panel overlay-left ${isSignUpActive ? "overlay-right" : ""}`}>
            <h1 className="texto-pixel">Bem vindo!</h1>
            <p className="texto-pixel">"Insira suas informações para criar sua conta."</p>
            <button className="ghost" onClick={handleTogglePanel}>
              {isSignUpActive ? "Sign In" : "Cadastre-se"}
            </button>
          </OverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default Login;


