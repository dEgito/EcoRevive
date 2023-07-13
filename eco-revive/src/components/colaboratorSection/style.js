import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  padding: 2rem 0;

  flex-direction: ${(props) => {
    switch(props.direction) {
      case "vertical":
        return "column"
      default:
        return "row"
    }
  }};

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
    font-size: 1.2rem;
    margin: .5rem 0;
  } 
`;

export const TeamContent = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;