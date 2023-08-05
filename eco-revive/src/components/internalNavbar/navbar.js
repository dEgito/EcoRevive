// Libs
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Assets
import Logo from "../../assets/Logo-nav.png";

import MobileMenuInterna from "../mobileNavInterna/mobileNavInterna";

// Style
import {
  Container,
  BtnContainer,
  Menu,
  MenuItem,
  NavbarContainerInterna,
  MenuLink,
  ButtonExit,
} from "./navbarStyle";

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    <NavbarContainerInterna>
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={Logo} />
        </Link>
        {isOpen ? (
          <AiOutlineClose
            onClick={toggleMenu}
            className="menu-icon"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="menu-icon"
            style={{ cursor: "pointer" }}
          />
        )}

        <Menu>
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
        </Menu>
        <BtnContainer>
          <ButtonExit onClick={() => handleLogout()}>Sair</ButtonExit>
        </BtnContainer>
      </Container>
      <MobileMenuInterna isOpen={isOpen}></MobileMenuInterna>
    </NavbarContainerInterna>
  );
}

export default InternalNavbar;
