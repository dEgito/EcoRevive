// Components
import Button from "../button";

import { Link } from "react-router-dom";

// Style
import {
  BtnContainer,
  MobileMenuContainer,
  Container,
  Menu,
  MenuItem,
  MenuLink,
} from "./mobileMenuStyle";

function MobileMenu({ isOpen }) {
  return isOpen ? (
    <MobileMenuContainer>
      <Container>
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
    </MobileMenuContainer>
  ) : null;
}

export default MobileMenu;
