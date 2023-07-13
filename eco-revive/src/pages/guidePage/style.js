import styled from "styled-components";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  color: #002454;
  margin: 0;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
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
    max-width: 32rem;
  }
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  background-color: #f8f8f8;
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 20rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 4rem;
  row-gap: 1rem;
  padding: 2rem 0;

  color: ${(props) => {
    switch(props.background) {
      case "blue":
        return "#ffffff"
      default:
        return "#002454"
    }
  }};

  background-color: ${(props) => {
    switch (props.background) {
      case "blue":
        return "#004BB0";

      case "green":
        return "#65D781";

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
    max-width: 38rem;
  }

  span {
    color: #004BB0;
    font-weight: 700;
  }
`;