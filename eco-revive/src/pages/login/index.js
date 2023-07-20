import { Container } from "./style";
import Logo from "../../assets/Logo320.png";
function Login() {
  return (
    <Container>
      <img src={Logo} />

      <div>
        <h1>Login</h1>
        <form>
          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <br />

          <label for="senha">Senha:</label>
          <br />
          <input type="password" id="senha" name="senha" />
          <br />
          <br />

          <button type="submit">Entrar</button>

          <br />

          <a href="#">Esqueci minha senha</a>
          <br />
          <a href="#">Crie uma conta</a>
        </form>
      </div>
    </Container>
  );
}
export default Login;
