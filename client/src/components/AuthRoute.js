import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const { isAuthenticated } = user;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to={"/"} /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
