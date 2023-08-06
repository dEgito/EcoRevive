import styled from "styled-components";

export const Container = styled.body`
  flex-wrap: wrap;
  text-align: center;
  color: var(--blue-700);
  margin: 0;

  h2 {
    font-size: 2rem;
  }

`;

export const Section = styled.section`
  max-width: 45rem;
  padding: 4rem;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Details = styled.div`
  background: rgba(111, 145, 61, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--green-700);
  border-bottom: 1px solid var(--accent-green-500);
  border-radius: 6.5rem;
  border-radius: 0.6875rem;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2rem;
  display: flex;
  margin-top: 2rem;
  margin-left: 1rem;
  
  p {
    padding: 3%;
    transition: all 0.5s;
  }
`;





