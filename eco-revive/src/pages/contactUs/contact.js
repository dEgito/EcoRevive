import Input from "../../components/input";
import Navbar from "../../components/navbar";
import TopGreenWave from "../../components/TopGreenWave";
import ColaboratorSection from "../../components/colaboratorSection";
import Copyright from "../../components/copyright";

import { Container, Content, InfoBox, Section } from "./style";

function ContactUs() {
  return (
    <Container>
      <Navbar />

      <Section>
        <h2>Fale Conosco</h2>
        <p>Queremos ouvir suas perguntas e sugestões.</p>

        <Content>
          <form>
            <Input type="text" item="name" label="Nome:" />
            <Input type="text" item="email" label="E-mail:" />
            <Input type="text" item="subject" label="Assunto:" />

            <label for="message">Mensagem:</label>
            <textarea id="message" />
          </form>

          <InfoBox>
            <div>
              <p>ecoreviverecife@gmail.com</p>
            </div>
            <div>
              <p>@ecoreviverecife</p>
            </div>
            <div>
              <p>(81) 989988765</p>
            </div>
            <div>
              <p>(81)987459073</p>
            </div>
          </InfoBox>
        </Content>
      </Section>
      <TopGreenWave />
      <ColaboratorSection />
      <Copyright />
    </Container>
  );
}

export default ContactUs;
