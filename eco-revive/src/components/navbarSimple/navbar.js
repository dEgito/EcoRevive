import LogoNav from "../../assets/LogoNavSvg.svg";
import { Header } from "./navbarStyle";
function NavBarInner() {
  return (
    <Header>
      <img src={LogoNav} alt="imagem logo" />
    </Header>
  );
}

export default NavBarInner;
