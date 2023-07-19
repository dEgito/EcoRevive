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
  text-transform: uppercase;
  font-weight: ${(props) => {
    return props.type === "filter" ? "500" : "700";
  }};

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
    border: 1px solid #4eb969;
    transition: 0.4s;
    color: #4eb969;
  }
`;
