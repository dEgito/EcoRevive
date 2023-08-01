import { Conteiner, Erro, Msg } from "./errorStyle";
import planet from "../../assets/planet.png";

function Error() {
  return (
    <Conteiner>
      <Erro>
        <p>4</p>
        <img src={planet} alt="Ops, algo deu errado" />
        <p>4</p>
      </Erro>
      <Msg>Ops! não encontramos essa pagina!</Msg>
    </Conteiner>
  );
}
export default Error;
