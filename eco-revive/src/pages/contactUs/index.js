import Input from "../../components/input";
import Navbar from "../../components/navbar";
import { Container, Section } from "./style";

function ContactUs() {
  return (
    <Container>
      <Navbar />
      <h2>Fale Conosco</h2>
      <p>Queremos ouvir suas perguntas e sugestões.</p>

      <Section>
        <form>
          <Input type="text" item="name" label="Nome:"/>
          <Input type="text" item="email" label="E-mail:"/>
          <Input type="text" item="subject" label="Assunto:"/>

          <label for="message">Mensagem:</label>
          <textarea id="message"/>
        </form>

        <div>
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
        </div>
      </Section>
    </Container>
  );
}

export default ContactUs;
