import '@babel/polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import gqlClient from '#root/api/graphqlClient';
import Root from '#root/components/Root';

import * as theme from './theme';

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
  <ApolloProvider client={gqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('app')
);
