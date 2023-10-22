import React, { useEffect } from 'react';
import '../styles/Login.css';

const Teste = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
  
    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
  
    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    // Remova os event listeners quando o componente for desmontado para evitar vazamento de memória
    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });
      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []); // O array vazio indica que este efeito só será executado uma vez, após a montagem do componente
  
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="texto-pixel">Criar conta</h1>
            <div className="social-container">
              {/* Adicione botões de mídia social aqui se necessário */}
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Criar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="texto-pixel">Login</h1>
            <div className="social-container">
              {/* Adicione botões de mídia social aqui se necessário */}
            </div>
            <span></span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Esqueceu sua senha?</a>
            <button>Entrar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="texto-pixel">Bem vindo!</h1>
              <p className="texto-pixel">Insira suas informações para criar sua conta.</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="texto-pixel">Olá!</h1>
              <p className="texto-pixel">Não tem uma conta?</p>
              <button className="ghost" id="signUp">Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teste;
