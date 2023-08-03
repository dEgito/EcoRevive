import Button from "../button";
import {
  Container,
  BtnContainer,
  HamburgerIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./navbarStyle";
import React, { useState } from "react";
import Logo from "../../assets/Logo-nav.png";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

function InternalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Link to={"/"} style={{ textDecoration: "none" }}>
      <img src={Logo} />
      </Link>
      <HamburgerIcon onClick={toggleMenu}>
        <AiOutlineMenu className={`fa ${isOpen ? "fa-times" : "fa-bars"}`} />
      </HamburgerIcon>

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
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Button category="secundary">Sair</Button>
          </Link>
        </BtnContainer>
      </Menu>
    </Container>
  );
}

export default InternalNavbar;