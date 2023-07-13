import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  max-width: 9.5rem;
  border-radius: 6.25rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;

  border: 2px solid #4eb969;
  background-color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#4eb969";

      case "secundary":
        return "#ffffff";

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

      default:
        return "#ffffff";
    }
  }};
`;
