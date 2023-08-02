import {
  Conteiner,
  Content,
  SectionLinks,
  Title,
  Question,
  Boxes,
} from "./homeStyle";
import NavBarInner from "../../components/navbarSimple/navbar";
import BoxLinks from "../../components/boxLinks/boxLinks";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Conteiner>
      <NavBarInner />

      <Content>
        <Title>
          Seja bem vindo, <strong>MARLENA</strong>!
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
