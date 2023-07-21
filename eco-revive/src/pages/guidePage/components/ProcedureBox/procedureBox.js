import { IconBox, InfoBox } from "./style";

function ProcedureBox({title, description}) {
  return (
    <InfoBox>
      <IconBox>x</IconBox>
      <div>
        <h3>{title}</h3>
        <p> {description}</p>
      </div>
    </InfoBox>
  );
}

export default ProcedureBox;
