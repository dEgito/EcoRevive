import styled from "styled-components";
import Background from "../../assets/bg-quem-somos.jpg";

export const Container = styled.body`
  color: var(--blue-700);
  margin: 0;

  h2 {
    font-size: 1.5rem;
    color: var(--gray-900);

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  h3 {
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  //Não mexer, está afetando o copyright
  P {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6rem 0;
  gap: 0.5rem;
  background-color: var(--green-500);
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  flex-wrap: wrap;
  background-repeat: no-repeat;
  color: var(--gray-900);

  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
    letter-spacing: 0.09rem;
    line-height: 1.5rem;
    text-align: center;
    font-weight: 600;
    width: 100%;
    max-width: 32rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  span {
    color: var(--green-500);
    font-weight: bold;
  }
`;

export const Mission = styled.div`
  h2 {
    color: var(--green-550);
    font-weight: bold;
  }

  p {
    max-width: 30rem;
    font-weight: medium;
    
    line-height: 1.5rem;
    font-weight: 500;
  }
`;

export const Values = styled.div`
  h2 {
    color: var(--green-550);
    font-weight: bold;
  }
  p {
    max-width: 30rem;
    font-weight: medium;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    padding: 1rem;
  }
`;

export const Presentation = styled.div`
  p {
    color: var(--green-550);
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
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

  span {
    color: var(--blue-500);
    font-weight: 700;
  }

  img {
    width: 80%;
    max-width: 26rem;
    min-width: 16rem;
  }

  p {
    letter-spacing: 0.09rem;
    max-width: 30rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  li {
    letter-spacing: 0.09rem;
    line-height: 1.5rem;
    list-style: circle;
    list-style-position: in;
  }
`;