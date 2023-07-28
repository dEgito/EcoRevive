import Navbar from "../../components/navbar";
import { Container, Section, Details} from "./style";
import TopGreenWave from "../../components/TopGreenWave";
import ColaboratorSection from "../../components/colaboratorSection/colaboratorSection";
import Copyright from "../../components/copyright/copyright";

function Faqs() {
  return (
    <Container>
      <Navbar />
      <Section>

        <h2>Dúvidas frequentes</h2>

        <Details>
          <details>
           <summary>Como funciona o descarte?</summary>
            <p>
              É simples! Nós ajudamos você a ser direcionado a um ponto de
              descarte conveniado. <a href="http://localhost:3000/locais" >Clicando aqui </a> você pode ter acesso a lista
              dos pontos de descarte.
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>Como posso descartar meu eletrônico?</summary>
            <p>
              Faça seu cadastro - entre na sua conta - selecione a opção
              <a href="http://localhost:3000/locais" >"agendar meu descarte"</a> - selecione o local desejado para o
              descarte - agende o dia e o horário - e na data marcada, se
              direcione até o ponto de coleta.
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>É possível acompanhar o processo de descarte?</summary>
            <p>
              Sim. Acessando a sua conta, você seleciona a opção "acompanhar meu
              descarte".
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>
              Como posso me inscrever para ser ponto de descarte?
            </summary>
            <p>
              Você se cadastra na nossa plataforma e seleciona a opção "quero
              ser um ponto de descarte"
            </p>
          </details>
        </Details>

        <Details>
          <details>
            <summary>Como posso apoiar o processo?</summary>
            <p>
              Entre em contato com o email ecoreviverecife@gmail.com com o
              assunto "quero apoiar" para mais informações.
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
