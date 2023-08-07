import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  padding: 2rem 0;

  flex-direction: ${(props) => {
    switch (props.direction) {
      case "vertical":
        return "column";
      default:
        return "row";
    }
  }};

  color: ${(props) => {
    switch (props.background) {
      case "blue":
        return "var(--white)";
      default:
        return "var(--blue-700)";
    }
  }};

  background-color: ${(props) => {
    switch (props.background) {
      case "blue":
        return "var(--blue-500)";

      case "green":
        return "var(--green-400)";

      default:
        return "var(--white)";
    }
  }};

  h2 {
    font-size: 1.2rem;
    margin: 0.5rem 0;

    @media (max-width: 480px) {
      font-size: 1rem; /* Porcentagem do tamanho da tela */
    }
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1%.5 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  img {
    width: 100%;
    max-width: 5rem;
    border-radius: 4px;
  }

  h4,
  a {
    margin: 0;
    text-align: center;
  }

  h4 {
    font-size: 0.9rem;
  }

  a {
    font-size: 0.8rem;
    color: var(--blue-500);
    font-weight: bold;
    text-decoration: none;
  }
`;
