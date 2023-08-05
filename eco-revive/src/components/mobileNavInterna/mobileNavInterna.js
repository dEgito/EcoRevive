// Components
import Button from "../button";

import { Link } from "react-router-dom";

// Style
import {
  BtnContainer,
  MobileInternaMenu,
  Container,
  Menu,
  MenuItem,
  MenuLink,
} from "./InternaStyle";

function MobileMenuInterna({ isOpen }) {
  return isOpen ? (
    <MobileInternaMenu>
      <Container>
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
              <Link to={"/empresa"} style={{ textDecoration: "none" }}>
                <MenuLink>Coleta</MenuLink>
              </Link>
            </MenuItem>
            <BtnContainer>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button category="secundary">Sair</Button>
            </Link>
          </BtnContainer>
          </Menu>
      </Container>
    </MobileInternaMenu>
  ) : null;
}

export default MobileMenuInterna;
