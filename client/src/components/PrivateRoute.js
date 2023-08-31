import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirect, ...rest }) => {
  const user = useSelector((state) => state.user);
  const { isAuthenticated } = user;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to={redirect} /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  redirect: "/login",
};

export default PrivateRoute;
