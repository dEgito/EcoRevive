import styled from "styled-components";

export const Conteiner = styled.div`
  font-family: Montserrat, sans-serif;
  margin: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Erro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: 15rem;
    color: #02a02d;
    margin: 0;
  }

  img {
    width: 15rem;
  }
`;

export const Msg = styled.div`
  font-size: 2rem;
  color: #02a02d;
`;
