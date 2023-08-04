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
        <Title>Olá, seja bem-vindo(a)!</Title>

        <SectionLinks>
          <Question> O que você deseja fazer hoje?</Question>
          <Boxes>
            <Link to={"/locais"} style={{ textDecoration: "none" }}>
              <BoxLinks color="green" children={"Agendar descarte"} />
            </Link>
            <Link to={"/historico"} style={{ textDecoration: "none" }}>
              <BoxLinks color="blue" children={"Histórico de agendamentos "} />
            </Link>
            <Link to={"/duvidas"} style={{ textDecoration: "none" }}>
              <BoxLinks color="orange" children={"Dúvidas frequentes"} />
            </Link>
            <Link to={"/empresas"} style={{ textDecoration: "none" }}>
              <BoxLinks color="purple" children={"Cadastrar ponto de coleta"} />
            </Link>
          </Boxes>
        </SectionLinks>
      </Content>
    </Conteiner>
  );
}
export default Home;
