import { styled } from "styled-components";

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  color: var(--white);

  p {
    font-size: .9rem;
    line-height: 1.5rem;
    max-width: 30rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.25rem;
  background: linear-gradient(
    106deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
`;
