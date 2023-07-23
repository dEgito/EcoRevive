import Button from "../../components/button";
import Input from "../../components/input";
import { Container, Card, ContainerButton, Div } from "./style";

function DisposalSchedule() {
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
            <Button category="secundary">Cancelar</Button>
            <Button category="primary">Salvar</Button>
          </ContainerButton>
        </form>
      </Card>
    </Container>
  );
}
export default DisposalSchedule;
