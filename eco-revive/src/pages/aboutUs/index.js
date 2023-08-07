// Components
import BottomBlueWave from "../../components/bottomBlueWave";
import BottomGreenWave from "../../components/bottomGreenWave";
import ColaboratorSection from "../../components/colaboratorSection/colaboratorSection";
import Copyright from "../../components/copyright/copyright";
import InternalNavbar from "../../components/internalNavbar/navbar";
import TopBlueWave from "../../components/TopBlueWave";
import TopGreenWave from "../../components/TopGreenWave";

// Assets
import Company from "../../assets/Company.png";
import Eco from "../../assets/Eco.png";
import Eletronic from "../../assets/Eletronic.png";
import OurMission from "../../assets/Our-mission.png";
import OurValues from "../../assets/Our-values.png";
import OurVision from "../../assets/Our-vision.png";
import Rec from "../../assets/Rec.png";
import Tech from "../../assets/Tech.png";

// Style
import {
  Banner,
  Container,
  Content,
  Mission,
  Presentation,
  Section,
  Values,
} from "./style";

function AboutUs() {
  return (
    <Container>
      <InternalNavbar />
      <Banner>
        <h1>Quem somos?</h1>
        <p>
          Somos o <span>ECO REVIVE RECIFE</span>, nosso principal objetivo é
          promover o reaproveitamento de dispositivos eletrônicos descartáveis,
          dando-lhes um novo destino.
        </p>
      </Banner>
      <Section wrap={"wrap"}>
        <Mission>
          <h2>Nossa missão</h2>
          <p>
            Reduzir a incidência do descarte incorreto dos e-lixo na território
            do Grande Recife e região Metropolitana.
          </p>
        </Mission>
        <div>
          <img src={OurMission} alt="nossa missão" />
        </div>
      </Section>
      <TopGreenWave />
      <Section background="green">
        <div>
          <img src={OurVision} alt="nossa visão" />
        </div>
        <div>
          <h2>Nossa visão</h2>
          <p>
            Ser uma empresa competitiva no âmbito de reciclagem de eletrônicos
            na Grande Recife até o segundo semestre de 2024.
          </p>
        </div>
      </Section>
      <BottomGreenWave />
      <Section wrap={"wrap"}>
        <Values>
          <h2>Nossos valores</h2>
          <ul>
            <li>Reponsabilidade social</li>
            <li>Consciência ambiental</li>
            <li>Qualidade</li>
            <li>Inovação</li>
          </ul>
        </Values>
        <div>
          <img src={OurValues} alt="nossos valores" />
        </div>
      </Section>
      <TopBlueWave />
      <Section direction="vertical" background="blue">
        <h2>O que nos motiva?</h2>
        <Content>
          <div>
            <img src={Eco} alt="Preocupação com o futuro ambiental" />
          </div>
          <div>
            <img src={Tech} alt="Desenvolvimento tecnológico" />
          </div>
          <div>
            <img
              src={Eletronic}
              alt="Uma sociedade consciente sobre o descarte de eletrônicos"
            />
          </div>
          <div>
            <img
              src={Rec}
              alt="O descarte correto de eletrônicos na Grande Recife"
            />
          </div>
          <div>
            <img src={Company} alt="Empresas com consciência ambiental" />
          </div>
        </Content>
      </Section>
      <BottomBlueWave />
      <Section>
        <Presentation>
          <p>
            Somos a solução para os lixos eletrônicos descartados incorretamente
            na Grande Recife!
          </p>
        </Presentation>
      </Section>
      <TopGreenWave />
      <ColaboratorSection />
      <Copyright />
    </Container>
  );
}

export default AboutUs;
