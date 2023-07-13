import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  max-width: 9.5rem;
  border-radius: 6.25rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;

  font-family: Montserrat, sans-serif;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;

  border: 2px solid
    ${(props) => {
      switch (props.type) {
        case "primary":
          return "#4eb969";

        case "secundary":
          return "#4eb969";

        case "accent":
          return "#004BB0";

        default:
          return "#4eb969";
      }
    }};
  background-color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#4eb969";

      case "secundary":
        return "#ffffff";

      case "accent":
        return "#004BB0";

      default:
        return "#4eb969";
    }
  }};

  color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#ffffff";

      case "secundary":
        return "#4eb969";

      case "accent":
        return "#ffffff";

      default:
        return "#ffffff";
    }
  }};
`;
