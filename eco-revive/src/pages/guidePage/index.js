import Button from "../../components/button";
import Navbar from "../../components/navbar";

import Logo from "../../assets/Logo320.png"; //rever qualidade da imagem
import RecycleSymbol from "../../assets/Recycle.png"
import BottomWave from "../../assets/Bottom_wave.png"

import { Banner, LogoImg, Wave } from "./style";

function GuidePage() {
  return (
    <>
      <Navbar /> {/*Corrigir sobreposição de elementos */}
      <Banner>
        <div>
          <LogoImg src={Logo}/>
          <p>Facilitando o processo de descarte responsável e colabora ativamente com a e-reciclagem.</p>
          <Button type="accent">Saiba mais</Button>
        </div>

        <img src={RecycleSymbol}/>
      </Banner>
      <Wave src={BottomWave}/>
    </>
  );
}

export default GuidePage;
