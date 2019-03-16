import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import MainPage from "./MainPage";

export const colorMain = "#FFF";
const GlobalStyle = createGlobalStyle`
  body,
  html {
    width: 100%;
    height: 100%;
    background: ${colorMain};
    font-family: 'Open Sans', sans-serif;
    color: #1a1a1a;
    font-size: 10px;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <MainPage />
  </>,
  document.getElementById("root")
);
