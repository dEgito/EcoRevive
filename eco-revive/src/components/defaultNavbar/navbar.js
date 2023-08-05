// Libs
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../button";

// Assets
import Logo from "../../assets/Logo-nav.png";

import MobileMenu from "../MobileMenu/mobileMenu";

// Style
import {
  BtnContainer,
  Container,
  HamburgerIcon,
  NavbarContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./style";

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function DefaultNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavbarContainer>
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
        </Menu>
        <BtnContainer>
          <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
            <Button category="primary">Cadastrar</Button>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Button category="secundary">Entrar</Button>
          </Link>
        </BtnContainer>
      </Container>
      <MobileMenu isOpen={isOpen}></MobileMenu>
    </NavbarContainer>
  );
}

export default DefaultNavbar;
