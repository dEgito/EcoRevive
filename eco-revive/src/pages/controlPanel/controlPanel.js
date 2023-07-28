import Navbar from "../../components/navbar";
import Button from "../../components/button";
import Copyright from "../../components/copyright/copyright";
import { Container, Content, Section } from "./style";


function controlPanel (){
    return(
        <Container>
            <Navbar/>
            <Section>
                <h2>Olá, Marlena!</h2>
                <p>Unidade: LOREM IPSUM</p>
                
                <Content>
                <p>BV-001 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>BV-001 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>BV-002 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>ND-001 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>CA-001 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>BV-001 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                <p>BV-002 LOREM IPSUM <Button category="primary">Detalhes</Button></p>
                </Content>
            </Section>
            <Copyright />
        </Container>
    );
}

export default ControlPanel;