// Libs
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Assets
import Logo from "../../assets/Logo-nav.png";

// Style
import {
  Container,
  BtnContainer,
  Menu,
  MenuItem,
  MenuLink,
  ButtonExit,
} from "./navbarStyle";

// Icons
import { AiOutlineMenu } from "react-icons/ai";

function InternalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    history("/");
  }

  return (
    <Container>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={Logo} />
      </Link>
      <AiOutlineMenu
        onClick={toggleMenu}
        className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
      />

      <Menu isOpen={isOpen}>
        <div>
          <MenuItem>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/locais"} style={{ textDecoration: "none" }}>
              <MenuLink>Agendar</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/historico"} style={{ textDecoration: "none" }}>
              <MenuLink>Histórico</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/*"} style={{ textDecoration: "none" }}>
              <MenuLink>Coleta</MenuLink>
            </Link>
          </MenuItem>
        </div>

        <BtnContainer>
          <ButtonExit onClick={() => handleLogout()}>Sair</ButtonExit>
        </BtnContainer>
      </Menu>
    </Container>
  );
}

export default InternalNavbar;
