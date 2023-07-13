import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7.5rem;
  //padding: 0 7.5rem; LEMBRETE: rever responsividade

  font-family: Montserrat, sans-serif;

  background: #f4f4f4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    max-width: 80px;
  }

  div {
    display: flex;
    gap: 2rem;
  }

  a {
    font-weight: 600;
    color: #222222;

    &:hover {
      color: #4eb969;
      font-weight: 800;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  max-width: 25rem;
`;
