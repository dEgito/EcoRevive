import styled from "styled-components";

export const Header = styled.div`
  background-color: #f4f4f4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0.5rem 7.5rem;

  @media screen and (max-width: 599px) {
    padding: 0.5rem 2.5rem;
    img {
      max-width: 80px;
    }
  }
  @media screen and (min-width: 599px) and (max-width: 800px) {
    padding: 0.5rem 4.5rem;
  }
`;
