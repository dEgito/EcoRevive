// Libs
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

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
} from "./navbarStyle";

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function InternalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button category="secundary">Sair</Button>
          </Link>
        </BtnContainer>
      </Container>
      <MobileMenuInterna isOpen={isOpen}></MobileMenuInterna>
    </NavbarContainerInterna>
  );
}

export default InternalNavbar;
