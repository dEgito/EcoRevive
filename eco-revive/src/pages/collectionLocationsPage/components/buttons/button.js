import { BtnFiltro, Conte } from "./buttonStyled";
import { GoFilter } from "react-icons/go";

function ButtonFiltro({ openModalFilter }) {
  return (
    <Conte>
      <BtnFiltro onClick={openModalFilter}>
        <GoFilter />
        <p>Todos os filtros</p>
      </BtnFiltro>
    </Conte>
  );
}

export default ButtonFiltro;
