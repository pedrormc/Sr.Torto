import React, { useRef, useEffect } from "react";
import axios from "axios";
import "../styles/Login.css";
import { toast } from "react-toastify";
import { ErrorMessage, Formik, Form, Field } from "formik";

function Login() {
  const refa = useRef();
  const refb = useRef();


  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    // Limpa os event listeners quando o componente é desmontado
    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []); 

  const handleLogin = async (e,values) => {
    e.preventDefault();
    try{
      const formDatas = new FormData(refb.current);

    const user = {
      nickname: formDatas.get("nickname"),
      email: formDatas.get("emails"),
      senha: formDatas.get("senhas")
    };
      
      const response = await axios.post("https://api-c0ie.onrender.com/user", user);
      toast.success("Usuário logado!");
      alert(response.data.msg);
      if(response.data.authorized) {
         const tokenExpiration = new Date(new Date().getTime() + 3600 * 1000);
         document.cookie = `token=${response.data.accessToken}; expires=${tokenExpiration.toUTCString()}; path=/`;
         window.location.href = '/admin';
       }
    }
    catch (err){
      console.log(err);
    }
    
  };

  const handleRegister = async (e) => {
    

    const formData = new FormData(refa.current);

    const user = {
      nickname: formData.get("nickname"),
      email: formData.get("email"),
      senha: formData.get("senha")
    };

    if (!user.nickname || !user.email || !user.senha) {
      return toast.warn("Preencha todos os campos!");
    } else {
      try {
        await axios.post("https://api-c0ie.onrender.com/user", user);
        toast.success("Usuário criado com sucesso!");
        refa.current.reset(); // Limpa o formulário após o envio bem-sucedido
      } catch (error) {
        toast.error("Erro ao criar usuário. Por favor, tente novamente.");
      }
    }
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">

        

          <form ref={refa} onSubmit={handleRegister} >
            <h1 className="texto-pixel">Criar conta</h1>
            <div className="social-container"></div>

            <input name="email" type="email" placeholder="Email" />
            <input name="nickname" type="text" placeholder="Nickname" />
            <input name="senha" type="password" placeholder="Senha" />

            <button type="submit">Criar</button>
          </form>
          
        </div>

        <div className="form-container sign-in-container">

       
          <form ref={refb} onSubmit={handleLogin}>
            <h1 className="texto-pixel">Login</h1>
            <div className="social-container"></div>

            <input name="emails" type="email" placeholder="Email" />
            
            <input name="senhas" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </form>
          
          
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="texto-pixel">Bem vindo!</h1>
              <p className="texto-pixel">
                Insira suas informações para criar sua conta.
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="texto-pixel">Olá!</h1>
              <p className="texto-pixel">Não tem uma conta?</p>
              <button className="ghost" id="signUp">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Login;




