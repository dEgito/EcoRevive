import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --gray-900: #f2f2f2;
    --gray-800: #f3f3f3;
    --gray-600: #f4f4f4;
    --gray-500: #f8f8f8;
    --gray-300: #ebebeb;
    --green-700: #014538;
    --green-600: #46af60;
    --green-500: #4eb969;
    --green-550: #52d874;
    --green-400: #65d781;
    --green-300: rgba(78, 185, 105, 0.12);
    --accent-green-700: #02a02d;
    --accent-green-500: #3ab032;
    --yellow-700: #e86310;
    --yellow-500: #e89f10;
    --blue-700: #002454;
    --blue-600: #0e3973;
    --blue-500: #004bb0;
    --black-900: #000000;
    --black-700: #1f1f1f;
    --black-500: #222222;
  }

  * {
    font-family: Montserrat, sans-serif;
  }

  h1, h2 {
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
