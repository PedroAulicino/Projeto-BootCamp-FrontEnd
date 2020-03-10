import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import logo from "../../assets/logo.svg";
import { signInRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("insira uma email valido")
    .required("email obrigatio"),
  password: Yup.string().required("A senha é obrigatoria")
});

export default function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />
        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
        <Link to="/register">Criar Conta Gratis</Link>
      </Form>
    </>
  );
}
