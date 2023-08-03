// Libs
import { Link } from "react-router-dom";

// Components
import BoxLinks from "./components/boxLinks/boxLinks";
import InternalNavbar from "../../components/internalNavbar/navbar";

// Styles
import {
  Conteiner,
  Content,
  SectionLinks,
  Title,
  Question,
  Boxes,
} from "./homeStyle";

function Home() {
  return (
    <Conteiner>
      <InternalNavbar />

      <Content>
        <Title>
          Olá, <strong>MARLENA</strong>!
        </Title>

        <SectionLinks>
          <Question> O que você deseja fazer hoje?</Question>
          <Boxes>
            <Link to={"/locais"} style={{ textDecoration: "none" }}>
              <BoxLinks color="green" children={"Agendar descarte"} />
            </Link>
            <Link to={"/erro"} style={{ textDecoration: "none" }}>
              <BoxLinks color="blue" children={"Acompanhar meu descarte"} />
            </Link>
            <Link to={"/historico"} style={{ textDecoration: "none" }}>
              <BoxLinks color="orange" children={"Histórico de agendamentos"} />
            </Link>
            <Link to={"/erro"} style={{ textDecoration: "none" }}>
              <BoxLinks color="purple" children={"Cadastrar ponto de coleta"} />
            </Link>
          </Boxes>
        </SectionLinks>
      </Content>
    </Conteiner>
  );
}
export default Home;
