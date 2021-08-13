import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import Login from './Login';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Switch>
          <Route component={Login} path="/login" />
        </Switch>
      </Container>
    </Wrapper>
  );
};

export default Root;
