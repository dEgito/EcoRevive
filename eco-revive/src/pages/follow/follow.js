import Input from "../../components/input";
import {
  Container,
  Card,
  ContainerButton,
  Div,
  BtnExit,
  BtnSubmit,
} from "./style";

function Follow ({ isOpen, closeModalFollow }) {
  if (isOpen) {
    return (
      <Container>
        <Card>
          <h1>Acompanhar Descarte</h1>

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
            <BtnExit onClick={closeModalFollow}>cancelar</BtnExit>
              <BtnSubmit type="submit" onClick={closeModalFollow}>
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
export default Follow ;
