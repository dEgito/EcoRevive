import { Btn } from "./style";
import { GoFilter } from "react-icons/go";

function Button({type, children}) {
  return (
    <Btn type={type}>{children}</Btn>
  )
}

export default Button;
