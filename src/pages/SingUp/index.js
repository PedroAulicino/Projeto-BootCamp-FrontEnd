import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import * as Yup from "yup";

import { Form, Input } from "@rocketseat/unform";
import { signUpRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatorio"),
  email: Yup.string()
    .email("insira uma email valido")
    .required("email obrigatio"),
  password: Yup.string()
    .min(6, "No minimo 6 caracteres")
    .required("A senha é obrigatoria")
});

export default function SingUp() {
  const dispath = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispath(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />
        <button type="submit">Criar Conta</button>
        <Link to="/">ja tenho login </Link>
      </Form>
    </>
  );
}
