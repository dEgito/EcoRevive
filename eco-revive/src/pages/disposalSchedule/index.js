import Button from "../../components/button";
import Input from "../../components/input";
import { Container,ContainerButton, Div } from "./style";

function DisposalSchedule() {
  return (
    <Container>
      <h1>Agendar Descarte</h1>

      <form>
        <div>
          <Input type="text" item="item" children="Item:" />
          <Input type="text" item="tipo" children="Tipo:" />
        </div>
        <div>
          <Input type="text" item="Unidade" children="Unidade:" />
          <Input type="date" item="data" children="Data:" />
        </div>
        <Div>
          <Input type="text" item="resposavel" children="Responsável:" />
        </Div>
        <Div>
          <Input type="text" item="status" children="Status:" />
        </Div>
        <ContainerButton>
          <Button type="secundary">Cancelar </Button>
          <Button type="primary">Salvar</Button>
        </ContainerButton>
      </form>
    </Container>
  );
}
export default DisposalSchedule;
