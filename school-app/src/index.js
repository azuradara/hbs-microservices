import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Root from '#root/components/Root';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap');

  html, body, #app {
    height: 100%;
    width: 100%;
  }
  
  body {
    font-family: Inter, sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

render(
  <>
    <GlobalStyle />
    <Root />
  </>,
  document.getElementById('app')
);
