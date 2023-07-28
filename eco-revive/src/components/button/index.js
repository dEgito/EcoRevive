import { Btn } from "./style";
import { GoFilter } from "react-icons/go";

function Button({ category, children, openModalFilter }) {
  // função para verificar a categoria do botão e dependendo da resposta, executar a função 'openModalFilter'
  function open() {
    return category === "filter" ? openModalFilter : null;
  }

  return (
    <Btn category={category} onClick={open()}>
      {category === "filter" ? <GoFilter size={20} /> : null}
      {children}
    </Btn>
  );
}

export default Button;
