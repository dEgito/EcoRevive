import LogoNav from "../../assets/LogoNavSvg.svg";
import { Header } from "./navbarStyle";
import { Link } from "react-router-dom";

function NavBarInner() {
  return (
    <Header>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={LogoNav} alt="imagem logo" />
      </Link>
    </Header>
  );
}

export default NavBarInner;
