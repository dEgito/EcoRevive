// Libs
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Assets
import Logo from "../../assets/Logo-nav.png";

// Style
import {
  BtnContainer,
  Container,
  HamburgerIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./style";

// Icons
import { AiOutlineMenu } from "react-icons/ai";

function DefaultNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/sobre"} style={{ textDecoration: "none" }}>
              <MenuLink>Sobre</MenuLink>
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

export default DefaultNavbar;
