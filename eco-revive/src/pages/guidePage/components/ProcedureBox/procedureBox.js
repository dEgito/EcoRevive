import { IconBox, InfoBox } from "./style";

function ProcedureBox({icon, title, description}) {
  return (
    <InfoBox>
      <IconBox>{icon}</IconBox>
      <div>
        <h3>{title}</h3>
        <p> {description}</p>
      </div>
    </InfoBox>
  );
}

export default ProcedureBox;
