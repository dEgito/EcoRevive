// Components
import Select from "../inputSelect/select";

// Style
import {
  BtnExit,
  BtnSubmit,
  Conteiner,
  ConteinerButton,
  Exit,
  Modal,
} from "./filterStyle";

// Icons
import { MdOutlineClose } from "react-icons/md";

function FiltersModal({ isOpen, closeModalFilter }) {
  if (isOpen) {
    return (
      <Conteiner>
        <Modal>
          <header>
            <h2>Filtar por: </h2>
            <Exit onClick={closeModalFilter}>
              <MdOutlineClose />
            </Exit>
          </header>
          <section>
            <Select />
          </section>
          <ConteinerButton>
            <BtnExit onClick={closeModalFilter}>cancelar</BtnExit>
            <BtnSubmit type="submit" onClick={closeModalFilter}>
              {/* o onclick de fechar é proviório */}
              aplicar
            </BtnSubmit>
          </ConteinerButton>
        </Modal>
      </Conteiner>
    );
  }
  return null;
}
export default FiltersModal;
