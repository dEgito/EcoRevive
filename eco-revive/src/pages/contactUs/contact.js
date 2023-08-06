// Components
import Button from "../../components/button";
import ColaboratorSection from "../../components/colaboratorSection/colaboratorSection";
import Copyright from "../../components/copyright/copyright";
import DefaultNavbar from "../../components/defaultNavbar/navbar";
import Input from "../../components/input/index";
import TopGreenWave from "../../components/TopGreenWave";

// Hooks
import { useState } from "react";

// Style
import { Container, Content, InfoBox, Section } from "./style";

// Icons
import { BiChevronsRight } from "react-icons/bi";

// api
import { api } from "../../Services/Api"

function ContactUs() {

  // Carrega as informações do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // TODO: Validar este formulário


  function handleSubmit(e){

    e.preventDefault();
    api.post('/mail', {
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then((response) => {
      if (response.status === 200) {
        return alert('Mensagem enviada com sucesso!')
      }
      return alert('Erro ao enviar mensagem!')
    }).catch((error) => {
      console.log(error)
    });
  }

  const inputChangeHandler = (event, setFunction) => {
    event.preventDefault();
    setFunction(event.target.value);
  };


  return (
    <Container>
      <DefaultNavbar />
      <Section>
        <h2>Fale Conosco</h2>
        <p>Queremos ouvir suas perguntas e sugestões.</p>

        <Content>
          <div>
            <form onSubmit={handleSubmit}> 
              <Input type="text" item="name" label="Nome:" onChangeSet={setName} />
              <Input type="text" item="email" label="E-mail:" onChangeSet={setEmail}/>
              <Input type="text" item="subject" label="Assunto:" onChangeSet={setSubject}/>

              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" onChange={(e) => setMessage(e.target.value)}/>
              <Button category="primary" type="submit">
             Enviar<BiChevronsRight size={20} />
            </Button>
            </form>

          </div>

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
