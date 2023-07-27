import styled from "styled-components";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  flex-wrap: wrap;
  text-align: center;
  color: #002454;
  margin: 0;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  p{
    font-size: 0.8;

  }
`;

export const Section = styled.section`
  max-width: 45rem;
  padding: 6rem;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Details = styled.div`
  background: rgba(111, 145, 61, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #014538;
  border-bottom: 1px solid #3ab032;
  border-radius: 6.5rem;
  border-radius: 0.6875rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1.5rem 2rem;
  display: flex;


  p {
    padding: 3%;
    transition: all 0.5s;
  }
`;




