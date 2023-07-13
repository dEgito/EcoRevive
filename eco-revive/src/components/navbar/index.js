import { Button } from "../../components/button/style";
import { Container, BtnContainer } from "./style";

import Logo from "../../assets/Logo-nav.png";

function Navbar() {
  return (
    <Container>
      <img src={Logo} />
      <div>
        <a>Home</a>
        <a>Guia</a>
        <a>Contato</a>
      </div>

      <BtnContainer>
        <Button type="primary">Cadastre-se</Button>
        <Button type="secundary">Entrar</Button>
      </BtnContainer>
    </Container>
  );
}

export default Navbar;