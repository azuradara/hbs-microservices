import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import gqlClient from '#root/api/graphqlClient';
import { setSession } from '#root/store/ducks/session';

import PrivateRoute from '#utils/components/routing/PrivateRoute';

import Login from './Login';
import Main from './Main';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        email
      }
    }
  }
`;

const Initialised = () => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const [init, setInit] = useState(false);

  useEffect(() => {
    gqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInit(true);
    });
  });

  if (!init) return 'Loading..';

  return (
    <Switch>
      <PrivateRoute
        allowVisit={!session}
        component={Login}
        path="/login"
        redirectTo="/"
      />
      <PrivateRoute
        allowVisit={!!session}
        component={Main}
        path="/"
        redirectTo="/login"
      />
    </Switch>
  );
};

export default Initialised;
