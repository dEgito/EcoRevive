import { Btn } from "./style";
import { GoFilter } from "react-icons/go";

function Button({ category, children }) {
  return (
    <Btn category={category}>
      {category === "filter" ? <GoFilter size={20} /> : ""}
      {children}
    </Btn>
  );
}

export default Button;
