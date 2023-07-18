import styled from "styled-components";
import Background from "../../assets/Bg-quem-somos.jpg";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  color: #002454;
  margin: 0;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
    color: #f2f2f2;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.09rem;
    width: 100%;
    max-width: 34rem;
  }
`;

export const Inicio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  gap: 0.5rem;
  background-image: url(${Background});
  flex-wrap: wrap;
  background-repeat: no-repeat;
  background-size: 100%;
  color: #f2f2f2;

  h1 {
    font-size: 2rem;
  }
  p {
    text-align: center;
  }
  span {
    color: #4eb969;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Mission = styled.div`
  h2{
    color: #52d874;
    font-weight: bold;
  }

  p{
    font-weight: medium;
  }
`;

export const Values = styled.div`
h2{
  color: #52d874;
  font-weight: bold;
}
p{
  font-weight: medium;
}
`;

export const Presentation = styled.div`
  p {
    color: #52d874;
    font-size: xx-large;
    font-weight: bolder;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
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
        return "#ffffff";
      default:
        return "#002454";
    }
  }};

  background-color: ${(props) => {
    switch (props.background) {
      case "blue":
        return "#004BB0";

      case "green":
        return "#52D874";

      default:
        return "#ffffff";
    }
  }};

  h2 {
    margin: 2rem 0;
  }

  img {
    max-width: 24rem;
  }

  p {
    max-width: 30rem;
  }

  span {
    color: #004bb0;
    font-weight: 700;
  }
`;
