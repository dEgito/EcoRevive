// Libs
import { Link } from "react-router-dom";

// Components
import Button from "../../components/button";
import { Conteiner, Erro, Msg } from "./errorStyle";

// Assets
import planet from "../../assets/planet.png";

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
