import styled from "styled-components";
import { Btn } from "../../components/button/style";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  margin: 0;
  background: #f4f4f4;
  overflow: hidden;
  li {
    list-style: none;
  }
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.87rem;
  margin-left: 4rem;
`;

export const Map = styled.iframe`
  border: 0;
  margin-left: 3rem;
  width: 41.6rem;
  height: 45.06rem;
`;

export const ConteinerMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.87rem;

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
  }

  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    padding-top: 0;

    ${Map} {
      max-width: 95%;
      max-height: 12.5rem;
      margin-left: 0;
      padding: 1rem;
    }

    ${DivFilter} {
      display: block;
      margin: 0;
      margin: 0 1rem;
    }

    ${Btn} {
      order: 2;
    }
  }
`;
