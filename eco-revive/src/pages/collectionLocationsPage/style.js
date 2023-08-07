import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  background: var(--gray-600);
  position: relative;

  li {
    list-style: none;
  }
`;

export const Map = styled.iframe`
  border: 0;
  margin-left: 3rem;
  width: 40rem;
  height: 45.06rem;
`;

export const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
