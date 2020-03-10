import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";
import { updateProfileRequest } from "../../store/modules/user/actions";
import { Container } from "./styles";
import AvatarInput from "./Avatarinput";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handlesubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handlesubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="email completo" />

        <hr />
        <Input
          type="password"
          name="oldpassword"
          placeholder="Senha anterior"
        />
        <Input type="password" name="passoword" placeholder="Nova senha" />
        <Input
          type="password"
          name="Confirm Password"
          placeholder="Confirmar senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do gobarber
      </button>
    </Container>
  );
}
