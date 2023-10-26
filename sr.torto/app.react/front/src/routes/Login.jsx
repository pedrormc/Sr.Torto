import { useState, useEffect } from "react";
import "../styles/Login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
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
  const handleLogin = async (values) => {
    try{
      const response = await Axios.post("https://api-c0ie.onrender.com/login", {
        email: values.email,
        senha: values.senha,
      })
      
       toast.success(response.data.msg)
      
      if(response.data.authorized) {
        const tokenExpiration = new Date(new Date().getTime() + 3600 * 100000);
        document.cookie = `token=${response.data.accessToken}; expires=${tokenExpiration.toUTCString()}; path=/`;
        window.location.href = '/home';
        
      }
    }
    catch (err){
      console.log(err);
    }
    
  };

  const handleRegister = (values) => {
    Axios.post("https://api-c0ie.onrender.com/user", {
      nickname: values.nickname,
      email: values.email,
      senha: values.senha,
    }).then(({ data }) => toast.success(data));
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    senha: yup
      .string()
      .min(4, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    senha: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),

      nickname: yup
      .string()
      
      .required("O nickname é obrigatório"),
  });

  return (
    <>
    <div className="container" id="container">
      
      <div className="form-container sign-up-container">
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        
        <Form className="form">
        <h1 className="texto-pixel">Cadastro</h1>
          <div className="register-form-group">
            <Field name="email" className="input" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="nickname" className="input" placeholder="Nickname" />

            <ErrorMessage
              component="span"
              name="nickname"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="senha" className="input" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="senha"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
        
      </Formik>
      </div>





      
      <div className="form-container sign-in-container">
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        
        <Form className="login-form">
        <h1 className="texto-pixel">Login</h1>
            <div className="social-container"></div>
          <div className="login-form-group">
            <Field name="email" className="input" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group">
            <Field name="senha" className="input" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="senha"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
        
      </Formik>
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

        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </div>
    
    </>
  );
};

export default Login;








