import styled from "styled-components";

export const Conte = styled.div`
  width: 90%;
  max-width: 72rem;
  padding-top: 1.87rem;
  padding-bottom: 0.87rem;
  @media (max-width: 500px) {
    padding-top: 1rem;
  }
`;

export const BtnFiltro = styled.button`
  border-radius: 4.98rem;
  width: 100%;
  max-width: 11.4rem;
  height: 3.3rem;

  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-weight: 500;

  cursor: pointer;

  border: 1px solid var(--black-900);
  background-color: none;
  color: var(--black-900);

  svg {
    height: 2rem;
    width: 1.3rem;
  }

  &:hover {
    transition: all ease-in-out 0.5s;
    border: 1px solid var(--green-500);
    background-color: none;
    color: var(--green-500);
  }

  @media (max-width: 500px) {
    max-width: 4rem;
    height: 3rem;

    p {
      display: none;
    }

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`;
