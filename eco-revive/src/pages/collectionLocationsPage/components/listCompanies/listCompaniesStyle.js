import styled from "styled-components";

export const Li = styled.div`
  width: 100%;
  max-width: 22.25rem;
  border: 1px solid var(--black-700);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  background: var(--gray-800);

  p {
    margin: 0;
    padding: 0 0 1.5rem 2.6rem;
  }

  h2 {
    padding: 1.6rem 3.75rem 1.2rem 2.6rem;
    margin: 0;
    font-size: 1.25rem;
  }

  @media (min-width: 600px) and (max-width: 1020px) {
    max-width: 23rem;

    p {
      padding: 0 1rem 1.5rem 2.6rem;
    }

    h2 {
      padding: 1.6rem 2.75rem 1.2rem 2.6rem;
    }
  }
`;

export const BtnAgenda = styled.button`
  width: 100%;
  max-width: 8.87rem;
  min-height: 2.11rem;
  border: none;
  border-radius: 0.6rem;
  background-color: var(--green-500);
  text-transform: uppercase;
  color: var(--white);
  font-size: 0.7rem;
  letter-spacing: 0.02rem;
  align-self: center;
  margin-bottom: 1.06rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--yellow-700);
  }
`;
