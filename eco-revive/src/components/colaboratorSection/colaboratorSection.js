import { Section, TeamContent, Content } from "./style";

const colaborators = [
  {
    id: 1,
    name: "Akyssa Eduarda",
    icon: "https://avatars.githubusercontent.com/u/110582028?s=64&v=4",
    github: "@akyssaeduarda",
    url: "https://github.com/akyssaeduarda",
  },
  {
    id: 2,
    name: "Amanda Alves",
    icon: "https://avatars.githubusercontent.com/u/102308691?s=64&v=4",
    github: "@amandaalvees",
    url: "https://github.com/amandaalvees",
  },
  {
    id: 3,
    name: "Danielly Egito",
    icon: "https://avatars.githubusercontent.com/u/75611712?v=4",
    github: "@dEgito",
    url: "https://github.com/degito",
  },
  {
    id: 4,
    name: "Emily Araújo",
    icon: "https://avatars.githubusercontent.com/u/134067128?s=64&v=4",
    github: "@EmillyMariaAraujo",
    url: "https://github.com/EmillyMariaAraujo",
  },
  {
    id: 5,
    name: "Geraldo Marques",
    icon: "https://avatars.githubusercontent.com/u/108906049?s=64&v=4",
    github: "@GeraldoMarques",
    url: "https://github.com/GeraldoMarques",
  },
];

function ColaboratorSection() {
  return (
    <Section background="green" direction="vertical">
      <h2>Conheça nosso time!</h2>
      <TeamContent>
        {colaborators.map((colaborator) => {
          return (
            <Content>
              <img src={colaborator.icon} />

              <div>
                <h4>{colaborator.name}</h4>
                <a href={colaborator.url}>{colaborator.github}</a>
              </div>
            </Content>
          );
        })}
      </TeamContent>
    </Section>
  );
}

export default ColaboratorSection;
