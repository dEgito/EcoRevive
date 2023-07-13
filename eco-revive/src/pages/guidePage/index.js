import Button from "../../components/button";
import Navbar from "../../components/navbar";
import BottomWhiteWave from "../../components/bottomWhiteWave";
import BottomBlueWave from "../../components/bottomBlueWave";
import TopBlueWave from "../../components/TopBlueWave";

import ProcedureBox from "../../components/ProcedureBox";

import Logo from "../../assets/Logo320.png"; //rever qualidade da imagem
import RecycleSymbol from "../../assets/Recycle.png";
import QuestionBox from "../../assets/question-box.png";
import Benefits from "../../assets/benefits.png";
import Planet from "../../assets/planet.png"

import { Banner, Container, LogoImg, Section } from "./style";

// import Trash from "@phosphor-icons/react"

const procedures = [
  {
    id: 1,
    icon: "",
    title: "1. Coleta",
    description:
      "Os dispositivos eletrônicos são coletados em pontos de coleta específicos, como postos de reciclagem.",
  },

  {
    id: 2,
    icon: "",
    title: "2. Desmontagem",
    description:
      "Os aparelhos eletrônicos são desmontados para separar os diferentes componentes. Isso é feito manualmente ou com o auxílio de máquinas.",
  },

  {
    id: 3,
    icon: "",
    title: "3. Triagem",
    description:
      "Os materiais separados são classificados e organizados de acordo com sua natureza e qualidade.",
  },

  {
    id: 1,
    icon: "",
    title: "4. Reciclagem",
    description:
      "Os materiais são processados, isso envolve: fusão de metais, trituração de plásticos ou outros processos específicos para cada tipo de material.",
  },

  {
    id: 5,
    icon: "",
    title: "5. Descarte adequado",
    description:
      "Se houver resíduos ou materiais não recicláveis após o processo de reciclagem, eles devem ser descartados adequadamente",
  },
];

function GuidePage() {
  return (
    <Container>
      <Navbar /> {/*Corrigir sobreposição de elementos */}
      <Banner>
        <div>
          <LogoImg src={Logo} />
          <p>
            Facilitando o processo de descarte responsável e colabora ativamente
            com a e-reciclagem.
          </p>
          <Button type="accent">Saiba mais</Button>
        </div>

        <img src={RecycleSymbol} />
      </Banner>
      <BottomWhiteWave />
      <Section>
        <div>
          <h2>O que é?</h2>
          <p>
            É o processo de recuperação e reutilização de materiais presentes em
            dispositivos eletrônicos descartados.
          </p>
          <p>
            Esses dispositivos incluem computadores, laptops, telefones
            celulares, tablets, televisores, eletrodomésticos e outros
            equipamentos eletrônicos.
          </p>
        </div>

        <img src={QuestionBox} />
      </Section>
      <Section>
        <img src={Benefits} />
        <div>
          <h2>E quais os benefícios?</h2>
          <p>
            Os produtos eletrônicos contêm materiais valiosos, como metais
            preciosos, além de plásticos e vidros.
          </p>
          <p>
            A partir da reciclagem, é possível recuperá-los e reintroduzi-los na
            cadeia de suprimentos.
          </p>
        </div>
      </Section>
      <TopBlueWave /> {/*remover linha fantasma */}
      <Section background="blue">
        <div>
          <h2>Como é o procedimento?</h2>

          {procedures.map((procedure) => {
            return (
              <ProcedureBox
                key={procedure.id}
                title={procedure.title}
                description={procedure.description}
              />
            );
          })}
        </div>

        <img src={Planet}/> {/* jogar imagem pro final */}
      </Section>
      <BottomBlueWave />
    </Container>
  );
}

export default GuidePage;
