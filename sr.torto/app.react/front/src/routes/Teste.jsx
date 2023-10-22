import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #C2D1DD;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Teste = () => {
  return (

   <FormContainer>
    <Form>

      <Form.Group bg="dark" data-bs-theme="dark" className="mb-3" controlId="formBasicEmail">
        <Form.Label>Digite seu Email</Form.Label>
        <Form.Control type="email" placeholder=" Email" />
        
      </Form.Group>

      <Form.Group bg="dark" data-bs-theme="dark" className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="Nickname" placeholder="Digite seu Nickname" />
      </Form.Group>

      <Form.Group bg="dark" data-bs-theme="dark" className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="Senha" placeholder="Digite sua senha" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    </FormContainer> 
  )
}

export default Teste