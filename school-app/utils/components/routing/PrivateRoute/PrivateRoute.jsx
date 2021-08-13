import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  allowVisit,
  component,
  redirectTo,
  render,
  ...rest
}) => {
  const renderedComponent = component
    ? (props) => <Component {...props} />
    : render && render;

  return (
    <Route
      {...rest}
      render={(props) =>
        allowVisit ? (
          renderedComponent(props)
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
