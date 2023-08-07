// Components
import ColaboratorSection from "../../components/colaboratorSection/colaboratorSection";
import Copyright from "../../components/copyright/copyright";
import InternalNavbar from "../../components/internalNavbar/navbar";
import TopGreenWave from "../../components/TopGreenWave";
import { Link } from "react-router-dom";

// Style
import { Container, Section, Details } from "./style";

function Faqs() {
  return (
    <Container>
      <InternalNavbar />
      <Section>
        <h2>Dúvidas frequentes</h2>

        <Details>
          <details>
            <summary>Como funciona o descarte?</summary>
            <p>
              É simples! Nós ajudamos você a ser direcionado a um ponto de
              descarte conveniado.
              <Link to={"/locais"}> Clicando aqui </Link> você
              pode ter acesso a lista dos pontos de descarte.
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>Como posso descartar meu eletrônico?</summary>
            <p>
              Faça seu cadastro - entre na sua conta - selecione a opção
              <Link to={"/locais"}>
                "agendar meu descarte"
              </Link>
              - selecione o local desejado para o descarte - agende o dia e o
              horário - e na data marcada, se direcione até o ponto de coleta.
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>É possível acompanhar o processo de descarte?</summary>
            <p>
              Sim. Acessando a sua conta, você seleciona a opção
              <Link to={"/historico"}>
                "acompanhar meu descarte".
              </Link>
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>
              Como posso me inscrever para ser ponto de descarte?
            </summary>
            <p>
              Você se cadastra na nossa plataforma e seleciona a opção
              <Link to={"/empresas"}>
                "Cadastre-se como empresa".
              </Link>
            </p>
          </details>
        </Details>
      </Section>

      <TopGreenWave />
      <ColaboratorSection />
      <Copyright />
    </Container>
  );
}

export default Faqs;
