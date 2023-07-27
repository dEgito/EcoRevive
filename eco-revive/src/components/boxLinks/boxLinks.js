import { BoxLink } from "./boxLinksStyle";

function BoxLinks({ color, children }) {
  return (
    <BoxLink color={color}>
      <p>{children}</p>
    </BoxLink>
  );
}
export default BoxLinks;
