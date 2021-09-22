import React, { useState } from "react";
import { FormControl, Button, Alert, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/users/usersActions";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, alerts } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };
  return (
    <div className="root">
      <div className="d-flex justify-content-center mt-4 w-75 row m-auto space-even">
        <h3 className="text-center">Login</h3>
        <p className="text-center">
          Not registered? <a href="/register">Register now</a>{" "}
        </p>
        {alerts.length > 0 &&
          alerts.map((alert) => (
            <Alert variant="danger" className="mb-2">
              {alert}
            </Alert>
          ))}
        <FormControl
          type="text"
          name="email"
          placeholder="Please Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          type="password"
          name="password"
          placeholder="Please Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button
          onClick={handleLogin}
          className="m-auto d-flex align-items-center"
          variant="success"
        >
          <span>Login</span>{" "}
          {loading && (
            <Spinner className="ms-2" animation="border" variant="secondary" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Login;
