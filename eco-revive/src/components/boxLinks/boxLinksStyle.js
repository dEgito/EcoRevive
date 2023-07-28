import styled from "styled-components";

export const BoxLink = styled.div`
  width: 11rem;
  height: 11rem;
  margin: 0;

  border-radius: 0.6rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;

  background-color: ${(props) => {
    switch (props.color) {
      case "blue":
        return "#2D64DB";

      case "green":
        return "#4EB969";

      case "orange":
        return "#FF9E01";

      case "purple":
        return "#772764";

      default:
        return "#4EB969";
    }
  }};

  p {
    font-family: Montserrat, sans-serif;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-align: center;
    padding: 1rem;
  }
`;
