import styled from "styled-components";

export const Btn = styled.button`
  max-width: 10rem;
  display: flex;
  border-radius: 6rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;

  font-family: Montserrat, sans-serif;
  font-size: 0.8rem;
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
  &:hover {
    border: 2px solid
      ${(props) => {
        switch (props.type) {
          case "primary":
            return "#0E3973";
          case "secundary":
            return "#0E3973";
          case "accent":
            return "#004BB0";
          default:
            return "#4EB969";
        }
      }};
    background-color: ${(props) => {
      switch (props.type) {
        case "primary":
          return "#0E3973";
        case "secundary":
          return "#0E3973";
        case "accent":
          return "#0E3973";
        default:
          return "#4EB969";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "primary":
          return "#f2f2f2";
        case "secundary":
          return "#f2f2f2";
        case "accent":
          return "#f2f2f2";
        default:
          return "#f2f2f2";
      }
    }};
  }
`;
