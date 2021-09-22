import React, { useState } from "react";
import { FormControl, Button, Spinner, Alert } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/users/usersActions";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, alerts } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserRegistration = () => {
    dispatch(registerUser({ name, email, password }));
  };
  return (
    <div className="root">
      <div className="d-flex justify-content-center mt-4 w-75 row m-auto space-even">
        <h3 style={{ textAlign: "center" }}>Signup</h3>
        <p className="text-center">
          Already a user ? <a href="/login">Login</a>{" "}
        </p>
        {alerts.length > 0 &&
          alerts.map((alert) => (
            <Alert variant="danger" className="mb-2">
              {alert}
            </Alert>
          ))}
        <FormControl
          type="text"
          name="name"
          placeholder="Please Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <div className="d-flex justify-content-center mt-3">
          <Button
            onClick={handleUserRegistration}
            className="m-auto d-flex align-items-center"
            variant="success"
          >
            <span>Signup</span>{" "}
            {loading && (
              <Spinner
                className="ms-2"
                animation="border"
                variant="secondary"
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
