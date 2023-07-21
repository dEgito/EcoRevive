import { Btn } from "./style";
import { GoFilter } from "react-icons/go";

function Button({ type, children }) {
  return (
    <Btn type={type}>
      {type === "filter" ? <GoFilter size={20} /> : ""}
      {children}
    </Btn>
  );
}

export default Button;
