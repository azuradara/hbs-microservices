import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import gqlClient from '#root/api/graphqlClient';
import { setSession } from '#root/store/ducks/session';

import PrivateRoute from '#utils/components/routing/PrivateRoute';

import Login from './Login';
import Main from './Main';
import FullScreen from '../../shared/FullScreen';

import { GET_USER_SESSION } from '#root/api/queries';

const Initialised = () => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const [init, setInit] = useState(false);

  useEffect(() => {
    gqlClient.query({ query: GET_USER_SESSION }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInit(true);
    });
  }, []);

  if (!init) return 'Loading..';

  return (
    <FullScreen>
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
    </FullScreen>
  );
};

export default Initialised;
