import { Btn } from "./style";

function Button({ category, children }) {
  return <Btn category={category}>{children}</Btn>;
}

export default Button;
