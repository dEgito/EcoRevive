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
import GuidePage from "../../pages/guidePage/guidepage";
import AboutUs from "../../pages/aboutUs";
import ContactUs from "../../pages/contactUs/contact";

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
            <Link to={"/"}>
              <MenuLink>Home</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/sobre"}>
              <MenuLink>Sobre nós</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/contato"}>
              <MenuLink>Contato</MenuLink>
            </Link>
          </MenuItem>
        </div>

        <BtnContainer>
          <Button category="primary">Cadastrar</Button>
          <Button category="secundary">Entrar</Button>
        </BtnContainer>
      </Menu>
    </Container>
  );
}

export default Navbar;
