import { Btn } from "./style";

function Button({ type, children }) {
  return <Btn type={type}>{children}</Btn>;
}

export default Button;