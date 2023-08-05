// Components
import Button from "../../components/button";
import Input from "../../components/input";

// Style
import { BtnExit, BtnSubmit, Card, Container, ContainerButton } from "./style";

function DisposalSchedule({ isOpen, closeModalSchedule }) {
  if (isOpen) {
    return (
      <Container>
        <Card>
          <h1>Agendar Descarte</h1>

          <form>
            <div>
              <Input type="text" item="item" label="Item:" />
            </div>
            <div>
              <Input type="text" item="Unidade" label="Unidade:" />
              <Input type="date" item="data" label="Data:" />
            </div>
            <div>
              <Input type="text" item="resposavel" label="Responsável:" />
            </div>
            <div>
              <Input type="text" item="status" label="Status:" />
            </div>
            <ContainerButton>
              <BtnExit onClick={closeModalSchedule}>cancelar</BtnExit>
              <BtnSubmit type="submit" onClick={closeModalSchedule}>
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
