import Button from "../../components/button";
import Input from "../../components/input";
import {
  Container,
  Card,
  ContainerButton,
  Div,
  BtnExit,
  BtnSubmit,
} from "./style";

function DisposalSchedule({ isOpen, closeModalSchedule }) {
  if (isOpen) {
    return (
      <Container>
        <Card>
          <h1>Agendar Descarte</h1>

          <form>
            <div>
              <Input type="text" item="item" label="Item:" />
              <Input type="text" item="tipo" label="Tipo:" />
            </div>
            <div>
              <Input type="text" item="Unidade" label="Unidade:" />
              <Input type="date" item="data" label="Data:" />
            </div>
            <Div>
              <Input type="text" item="resposavel" label="Responsável:" />
            </Div>
            <Div>
              <Input type="text" item="status" label="Status:" />
            </Div>
            <ContainerButton>
              <BtnExit onClick={closeModalSchedule}>cancelar</BtnExit>
              <BtnSubmit type="submit" onClick={closeModalSchedule}>
                {/* onclick close provisório */}
                Salvar
              </BtnSubmit>
            </ContainerButton>
          </form>
        </Card>
      </Container>
    );
  } else {
    return null;
  }
}
export default DisposalSchedule;
