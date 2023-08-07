import styled from "styled-components";

export const Container = styled.div`
  font-family: Montserrat, sans-serif;
  color: var(--blue-700);
  margin: 0;

  h2 {
    font-size: 1.5rem;
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  h3 {
    font-size: 1rem;
    @media (max-width: 480px) {
      font-size: .9rem;
    }
  }

  //Não mexer, está afetando o copyright
  p {
    margin: 0;
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0 2rem;
  background-color: var(--gray-500);

  flex-wrap: ${(props) => {
    switch (props.wrap) {
      case "wrap":
        return "wrap";
      default:
        return "wrap-reverse";
    }
  }};

  img {
    width: 60%;
    max-width: 26rem;
    min-width: 16rem;
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.09rem;
    width: 100%;
    max-width: 32rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: .9rem;
    }
  }

  @media (max-width: 800px) {
    gap: 1rem;
    padding: 1rem 2rem 2rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      margin-bottom: 2rem;
    }
  }
`;

export const LogoImg = styled.img`
display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
  padding: 2rem 1rem;

  flex-direction: ${(props) => {
    switch (props.direction) {
      case "vertical":
        return "column";
      default:
        return "row";
    }
  }};

  flex-wrap: ${(props) => {
    switch (props.wrap) {
      case "wrap":
        return "wrap";
      default:
        return "wrap-reverse";
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
    margin: 2rem 0;
  }

  img {
    width: 40%;
    max-width: 24rem;
    min-width: 10rem;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.09rem;
    width: 80%;
    max-width: 30rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: .9rem;
    }
  }

  span {
    color: var(--blue-500);
    font-weight: 700;
  }

  @media (max-width: 800px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
