import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { authenticationService as AuthService } from '../services';

const PrivateRoute = ({ children, ...rest }: any) => {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        AuthService.getCurrentUser() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
  
}

export default PrivateRoute
