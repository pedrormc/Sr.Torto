import { useState } from "react";
import "../styles/Login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

function Login() {
  const handleLogin = async (values) => {
    try{
      const response = await Axios.post("http://localhost:8800/login", {
        email: values.email,
        senha: values.senha,
      });
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

  const handleRegister = (values) => {
    Axios.post("http://localhost:8800/register", {
      nickname: values.nickname,
      email: values.email,
      senha: values.senha,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
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
    <div className="container">

<h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="nickname" className="form-field" placeholder="Nickname" />

            <ErrorMessage
              component="span"
              name="nickname"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="senha" className="form-field" placeholder="Senha" />

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





      
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group">
            <Field name="senha" className="form-field" placeholder="Senha" />

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
  );
}
      
 

export default Login;
