import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  max-width: ${(props) => {
    return props.type === "filter" ? "11.4rem" : "9.5rem";
  }};

  border-radius: 6.25rem;
  display: flex;
  gap: 0.25rem;

  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    return props.type === "filter" ? "1rem 0" : "0.5rem 1.5rem";
  }};

  font-family: Montserrat, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-weight: ${(props) => {
    return props.type === "filter" ? "500" : "700";
  }};

  cursor: pointer;

  border: ${(props) => {
    switch (props.type) {
      case "primary":
        return "2px solid #4eb969";

      case "secundary":
        return "2px solid #4eb969";

      case "accent":
        return "2px solid #004BB0";

      case "filter":
        return "1px solid #000000";

      default:
        return "2px solid #4eb969";
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

      case "filter":
        return "none";

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

      case "filter":
        return "#000000";

      default:
        return "#ffffff";
    }
  }};

  &:hover {
    border: ${(props) => {
      switch (props.type) {
        case "2px solid primary":
          return "#0E3973";
        case "2px solid secundary":
          return "2px solid #0E3973";
        case "accent":
          return "2px solid #004BB0";
        case "filter":
          return "1px solid #4eb969 ";
        default:
          return "2px solid #4EB969";
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
        case "filter":
          return "none";
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
        case "filter":
          return "#4eb969";
        default:
          return "#f2f2f2";
      }
    }};
  }
`;
