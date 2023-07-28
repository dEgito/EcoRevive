import styled from "styled-components";
import { Btn } from "../../components/button/style";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  margin: 0;
  background: #f4f4f4;
  overflow-y: hidden;
  position: relative;

  li {
    list-style: none;
  }
  ${Btn} {
    margin: 2rem 0 0 5.5rem;
  }

  @media (max-width: 600px) {
    ${Btn} {
      margin: 1rem 0 0 1rem;
      width: 100%;
      width: 3.3rem;
      height: 2.3rem;
      font-size: 0rem; /* Falta remover o texto de corretamente  */
      gap: 0;
      padding: 0;
      border-radius: 2rem;
    }
  }

  @media (min-width: 451px) and (max-width: 600px) {
    ${Btn} {
      margin: 1rem 0 0 4.5rem;
    }
  }
`;

export const Map = styled.iframe`
  border: 0;
  margin-left: 3rem;
  width: 40rem;
  height: 45.06rem;
`;

export const Cont = styled.div``;

export const ConteinerMain = styled.div`
  max-width: 90rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  padding: 1rem;

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    gap: 3rem;
    height: 49rem;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 0.5rem;
    padding-left: 0;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.09);
      border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(163, 163, 163, 0.5);
      border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(163, 163, 163, 0.7);
    }

    @media (max-width: 1020px) {
      height: 24.5rem;
    }

    @media (min-width: 687px) and (max-width: 1020px) {
      padding: 0 5rem;
    }

    @media (min-width: 767px) and (max-width: 1020px) {
      padding: 0 7rem;
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
    padding: 1rem 1rem 0 1rem;
    gap: 2rem;

    ${Map} {
      max-width: 100%;
      max-height: 12.5rem;
      margin-left: 0;
    }
  }

  @media (min-width: 600px) and (max-width: 1020px) {
    padding: 1rem 4.5rem 0 4.5rem;
    flex-wrap: nowrap;

    ${Map} {
      max-width: 100%;
      max-height: 21rem;
    }
  }

  @media (min-width: 1021px) and (max-width: 1030px) {
    flex-wrap: nowrap;
  }
`;
