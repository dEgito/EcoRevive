import Navbar from "../../components/navbar";
import { Container, Inicio } from "./style";
import { Section } from "../guidePage/style";
import NossaMissao from "../../assets/nossa-missao.png";
import NossaVisao from "../../assets/nossa-visao.png";
import NossosValores from "../../assets/nossos-valores.png";

function QuemSomos() {
  return (
    <Container>
      <Navbar /> {/*Corrigir sobreposição de elementos */}
      <Inicio>
        <h1>Quem somos?</h1>
        <p>
          Somos o <span>ECO REVIVE RECIFE</span>, nosso principal objetivo é
          promover o reaproveitamento de dispositivos eletrônicos descartáveis,
          dando-lhes um novo destino.
        </p>
      </Inicio>
      <Section>
        <div>
          <h2>Nossa missão</h2>
          <p>
            Reduzir a incidência do descarte incorreto dos e-lixo na território
            do Grande Recife e região Metropolitana.
          </p>
        </div>
        <img src={NossaMissao} />
      </Section>
      <Section>
        <div>
          <h2>Nossa visão</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={NossaVisao} />
      </Section>
      <Section>
        <div>
          <h2>Nossos valores</h2>
          <ul class="lista-valores">
            <li>Reponsabilidade social</li>
            <li>Consciência ambiental</li>
            <li>Qualidade</li>
            <li>Inovação</li>
          </ul>
        </div>
        <img src={NossosValores}/>
      </Section>
    </Container>
  );
}

export default QuemSomos;
