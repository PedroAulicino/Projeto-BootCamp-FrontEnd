import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import logo from "../../assets/logotop.svg";
import { Container, Content, Profile } from "./styled";
import Notification from "../../components/Header/Notifications";
export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="dashborad"> dashborad </Link>
        </nav>
        <aside>
          <Notification />

          <Profile>
            <div>
              <strong>{profile.name} </strong>
            </div>
            <img
              src={
                profile.avatar.url ||
                "https://d13es1p1rl0iq1.cloudfront.net/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg"
              }
              alt="Pedro"
            />
          </Profile>
        </aside>
        <Link to="profile"> Meu perfil</Link>
      </Content>
    </Container>
  );
}
