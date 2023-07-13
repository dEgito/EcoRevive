import { Content } from "./style";

function ColaboratorInfo({name, icon, github, url}) {
  return (
    <Content>
      <img src={icon} />

      <div>
        <h4>{name}</h4>
        <a href={url}>{github}</a>
      </div>
    </Content>
  );
}

export default ColaboratorInfo;
