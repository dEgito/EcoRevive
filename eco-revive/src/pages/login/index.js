import { ButtonBox, Container, Content } from "./style";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import Logo from "../../assets/Logo320.png";

function Login() {
  return (
    <Container>
      <img src={Logo} />

      <Content>
        <h1>Login</h1>
        <form>
          <Input category="secundary" type={"text"} item={"user"} label={"Usuário:"} />
          <Input category="secundary" type={"password"} item={"password"} label={"Senha:"} />

          <Button category={"primary"} type={"submit"}>
            Entrar
          </Button>
        </form>

        <ButtonBox>
          <a href="#">Esqueci minha senha</a>
          <a href="#">Crie uma conta</a>
        </ButtonBox>
      </Content>
    </Container>
  );
}
export default Login;
