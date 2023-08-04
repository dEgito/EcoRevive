import styled from "styled-components";

export const Btn = styled.button`
  border-radius: 4.98rem;
  width: 100%;
  max-width: ${(props) => {
    return props.category === "filter" ? "11.4rem" : "10rem";
  }};

  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    return props.category === "filter" ? "1rem 0" : "0.5rem 1.5rem";
  }};

  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-weight: ${(props) => {
    return props.category === "filter" ? "500" : "700";
  }};

  cursor: pointer;

  border: ${(props) => {
    switch (props.category) {
      case "primary":
        return "2px solid var(--green-500)";

      case "secundary":
        return "2px solid var(--green-500)";

      case "accent":
        return "2px solid var(--blue-500)";

      case "filter":
        return "1px solid var(--black-900)";

      default:
        return "2px solid var(--green-500)";
    }
  }};

  background-color: ${(props) => {
    switch (props.category) {
      case "primary":
        return "var(--green-500)";

      case "secundary":
        return "var(--white)";

      case "accent":
        return "var(--blue-500)";

      case "filter":
        return "none";

      default:
        return "var(--green-500)";
    }
  }};

  color: ${(props) => {
    switch (props.category) {
      case "primary":
        return "var(--white)";

      case "secundary":
        return "var(--green-500)";

      case "accent":
        return "var(--white)";

      case "filter":
        return "var(--black-900)";

      default:
        return "var(--white)";
    }
  }};

  &:hover {
    transition: all ease-in-out 0.5s;
    border: ${(props) => {
      switch (props.category) {
        case "primary":
          return "2px solid var(--blue-600)";
        case "secundary":
          return "2px solid var(--blue-600)";
        case "accent":
          return "2px solid var(--blue-500)";
        case "filter":
          return "1px solid var(--green-500) ";
        default:
          return "2px solid var(--green-500)";
      }
    }};

    background-color: ${(props) => {
      switch (props.category) {
        case "filter":
          return "none";
        default:
          return "var(--blue-700)";
      }
    }};

    color: ${(props) => {
      switch (props.category) {
        case "filter":
          return "var(--green-500)";
        default:
          return "var(--white)";
      }
    }};
  }
`;
