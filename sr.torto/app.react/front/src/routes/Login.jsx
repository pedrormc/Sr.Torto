import { useState } from "react";
import "../styles/Login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

function Login() {
  const handleLogin = (values) => {
    Axios.post("http://localhost:8800/login", {
      email: values.email,
      senha: values.senha,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:8800/register/", {
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
      .min(8, "A senha deve ter pelo menos 8 caracteres")
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
    confirmation: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="container">
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
