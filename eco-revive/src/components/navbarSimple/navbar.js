import LogoNav from "../../assets/LogoNavSvg.svg";
import { Header, NavButton } from "./navbarStyle";
import { Link } from "react-router-dom";

function NavBarInner() {
  return (
    <Header>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={LogoNav} alt="imagem logo" />
      </Link>
      <nav>
        <Link to={"/locais"} style={{ textDecoration: "none" }}>
          <NavButton>Agendar</NavButton>
        </Link>
        <Link to={"/historico"} style={{ textDecoration: "none" }}>
          <NavButton>Histórico</NavButton>
        </Link>
        <Link to={"/erro"} style={{ textDecoration: "none" }}>
          <NavButton>Cadastrar coleta</NavButton>
        </Link>
      </nav>
    </Header>
  );
}

export default NavBarInner;
