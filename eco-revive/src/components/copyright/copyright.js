import React from "react";
import { Copy } from "./style";
import { BiCopyright } from "react-icons/bi";

function Copyright() {
  return (
    <Copy>
      <a
        href="https://github.com/dEgito/EcoRevive"
        target="_blank"
        rel="noopener noreferrer"
      >
        Eco Revive
      </a>
      <BiCopyright color="var(--white)" />
      <p>Todos os direitos reservados.</p>
    </Copy>
  );
}

export default Copyright;
