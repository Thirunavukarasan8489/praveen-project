import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticateToken from '../NavBar/auth'; // Import the authenticateToken middleware

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticateToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
