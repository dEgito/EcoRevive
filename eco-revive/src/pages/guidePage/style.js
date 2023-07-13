import styled from "styled-components";

export const Banner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: #f8f8f8;

  p {
    font-family: Montserrat, sans-serif;
    font-size: 1.2rem;
    width: 100%;
    max-width: 32rem;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 20rem;
`;

export const Wave = styled.img`
  width: 100%;
  max-height: 5rem;
`;