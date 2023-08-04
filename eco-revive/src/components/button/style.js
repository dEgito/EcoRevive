import styled from "styled-components";

export const Btn = styled.button`
  border-radius: 4.98rem;
  width: 100%;
  max-width: 10rem;

  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-weight: 700;

  cursor: pointer;

  border: ${(props) => {
    switch (props.category) {
      case "primary":
        return "2px solid var(--green-500)";

      case "secundary":
        return "2px solid var(--green-500)";

      case "accent":
        return "2px solid var(--blue-500)";

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
        default:
          return "2px solid var(--green-500)";
      }
    }};

    background-color: var(--blue-700);

    color: var(--white);
  }
`;
