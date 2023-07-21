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
            <MenuLink href="#">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Sobre nós</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Contato</MenuLink>
          </MenuItem>
        </div>

        <BtnContainer>
          <Button type="primary">Cadastre-se</Button>
          <Button type="secundary">Entrar</Button>
        </BtnContainer>
      </Menu>
    </Container>
  );
}

export default Navbar;
