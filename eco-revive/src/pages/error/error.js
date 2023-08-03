import { Conteiner, Erro, Msg } from "./errorStyle";
import planet from "../../assets/planet.png";
import Button from "../../components/button";

import { Link } from "react-router-dom";

function Error() {
  return (
    <Conteiner>
      <Erro>
        <p>4</p>
        <img src={planet} alt="Planeta" />
        <p>4</p>
      </Erro>
      <Msg>Ops! não encontramos essa pagina!</Msg>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button category={"primary"}>Página inicial</Button>
      </Link>
    </Conteiner>
  );
}
export default Error;
