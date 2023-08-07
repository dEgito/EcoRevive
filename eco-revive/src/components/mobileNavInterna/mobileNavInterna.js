import { Link, useNavigate } from "react-router-dom";

// Style
import {
  BtnContainer,
  MobileInternaMenu,
  Container,
  Menu,
  MenuItem,
  MenuLink,
  ButtonExit,
} from "./InternaStyle";

function MobileMenuInterna({ isOpen }) {
  const history = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    history("/");
  }

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
                <Link to={"/duvidas"} style={{ textDecoration: "none" }}>
                  <MenuLink>FAQ</MenuLink>
                </Link>
              </MenuItem>
            <MenuItem>
              <Link to={"/empresas"} style={{ textDecoration: "none" }}>
                <MenuLink>Cadastrar</MenuLink>
              </Link>
            </MenuItem>
            <BtnContainer>
              <ButtonExit onClick={() => handleLogout()}>Sair</ButtonExit>
            </BtnContainer>
          </Menu>
      </Container>
    </MobileInternaMenu>
  ) : null;
}

export default MobileMenuInterna;
