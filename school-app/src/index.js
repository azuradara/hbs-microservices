import '@babel/polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import gqlClient from '#root/api/graphqlClient';
import Root from '#root/components/Root';

import store from './store';
import * as theme from './theme';
import '#root/styles/globals.css';

const GlobalStyle = createGlobalStyle`

  html, body, #app {
    height: 100%;
    width: 100%;
  }
  
  body {
    font-family: Poppins, sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

render(
  <Provider store={store}>
    <ApolloProvider client={gqlClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
);
