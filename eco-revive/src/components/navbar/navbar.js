import Button from "../button";
import {
  Container,
  BtnContainer,
  HamburgerIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./style";
import React, { useState } from "react";
import Logo from "../../assets/Logo-nav.png";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
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
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/sobre"} style={{ textDecoration: "none" }}>
              <MenuLink>Sobre nós</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/contato"} style={{ textDecoration: "none" }}>
              <MenuLink>Contato</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/duvidas"} style={{ textDecoration: "none" }}>
              <MenuLink>FAQ</MenuLink>
            </Link>
          </MenuItem>
        </div>

        <BtnContainer>
          <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
            <Button category="primary">Cadastrar</Button>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Button category="secundary">Entrar</Button>
          </Link>
        </BtnContainer>
      </Menu>
    </Container>
  );
}

export default Navbar;
