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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <img src={Logo} />
      {/* LEMBRETE: CHAMAR ICON */}
      <HamburgerIcon onClick={toggleMenu}>
        <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`} />
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
            <Link to={"/duvidas"}>
              <MenuLink>Dúvidas frequentes</MenuLink>
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
