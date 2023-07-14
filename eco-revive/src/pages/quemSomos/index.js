import Button from "../../components/button";
import Navbar from "../../components/navbar";
import BottomWhiteWave from "../../components/bottomWhiteWave";
import Logo from "../../assets/Logo320.png"; //rever qualidade da imagem
import { Container, Inicio } from "./style";

function QuemSomos() {
  return (
    <Container>
      <Navbar /> {/*Corrigir sobreposição de elementos */}
      <Inicio>
        <h1>Quem somos?</h1>
        <p>
          Somos o <span>ECO REVIVE RECIFE</span>, nosso principal objetivo é promover o
          reaproveitamento de dispositivos eletrônicos descartáveis, dando-lhes
          um novo destino.
        </p>
      </Inicio>
    </Container>
  );
}

export default QuemSomos;
