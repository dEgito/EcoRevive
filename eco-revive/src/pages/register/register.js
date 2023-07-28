import { ButtonBox, Container, Content } from "./style";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import Logo from "../../assets/Logo320.png";

function Register() {
  return (
    <Container>
      <Content>
        <img src={Logo} />
        <h1>Cadastro</h1>
        <form>
          <Input
            category="secundary"
            type={"text"}
            item={"name"}
            label={"Nome completo:"}
          />
          <Input
            category="secundary"
            type={"text"}
            item={"email"}
            label={"E-mail:"}
          />
          <Input
            category="secundary"
            type={"password"}
            item={"password"}
            label={"Senha::"}
          />
          <Input
            category="secundary"
            type={"password"}
            item={"passwordConfirm"}
            label={"Confirme a senha:"}
          />

          <Button category={"primary"} type={"submit"}>
            Cadastrar
          </Button>
        </form>

        <ButtonBox>
          <a href="#">Já possuo conta! Entrar</a>
        </ButtonBox>
      </Content>

      <img src={Logo} />
    </Container>
  );
}
export default Register;
