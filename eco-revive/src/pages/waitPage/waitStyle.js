import styled from "styled-components";

export const Conteiner = styled.div`
  height: 100vh;
  margin: 0;
  font-family: Monteserrat, sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  line-height: 1.125rem;
  letter-spacing: 0.16rem;
  padding-left: 5rem;
  margin-bottom: 4rem;

  strong {
    color: #004bb0;
  }

  @media (max-width: 470px) {
    padding: 0%;
    text-align: center;
    line-height: 2rem;
    margin: 0rem;
  }
  @media (min-width: 470px) and (max-width: 570px) {
    padding: 0%;
    text-align: center;
  }
  @media (max-width: 800px) {
    padding-left: 0rem;
  }
`;

export const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 550px) {
    gap: 3rem;
  }
`;

export const Question = styled.div`
  color: #1f1f1f;
  /* text-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25); */
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 470px) {
    padding: 0%;
    text-align: center;
    margin-top: 2rem;
    line-height: 2rem;
    margin-bottom: 0rem;
    font-size: 1.8rem;
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  padding-bottom: 4rem;

  @media (max-width: 500px) {
    gap: 3rem;
  }
`;
