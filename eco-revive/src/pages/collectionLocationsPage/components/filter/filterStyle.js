import styled from "styled-components";

export const Conteiner = styled.div`
  font-family: Montserrat, sans-serif;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(94, 94, 94, 0.6);
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 24rem;
  height: 18rem;
  background-color: #f3f3f3;
  border-radius: 0.46rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.75px solid rgba(172, 172, 172, 0.25);
  }

  header h2 {
    color: #1f1f1f;
    text-transform: uppercase;
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 2rem;
  }
  section {
    display: flex;
    flex-direction: column;
  }
`;

export const Exit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: #1f1f1f;
  }

  &:hover {
    background-color: rgba(217, 217, 217, 0.5);
  }
`;

export const ConteinerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`;

export const BtnExit = styled.button`
  width: 5.1rem;
  height: 2.2rem;
  border-radius: 4.98rem;
  border: 1.058px solid #1f1f1f;
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
    transition: 0.2s;
  }
`;

export const BtnSubmit = styled.button`
  width: 5.1rem;
  height: 2.2rem;
  border-radius: 4.98rem;
  border: none;
  background: #4eb969;
  font-family: Montserrat, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #46af60;
    transition: 0.5s;
  }
`;