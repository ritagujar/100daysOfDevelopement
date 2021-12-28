import React, { useState } from "react";
import {
  SignUpContainer,
  StyleText,
  Text,
  Card,
  TextFiled,
  Button,
  LoginLink,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    alert("Form Submited");
  };

  return (
    <>
      <SignUpContainer>
        <StyleText>Login</StyleText>
        <Text>
          Don't have an account? <LoginLink to="/signup">SignUp</LoginLink>now.
        </Text>
        <Card>
          <TextFiled>Your email</TextFiled>
          <input
            type="email"
            htmlFor=""
            placeholder="Enter email"
            onChange={handleEmail}
            value={email}
          ></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            placeholder="Enter password"
            onChange={handlePassword}
            value={password}
          ></input>
          <LoginLink
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              fontSize: "1.1rem",
            }}
            to="/"
          >
            Forgot password?
          </LoginLink>
          <Button type="submit" onClick={handleSubmit}>
            Sign up
          </Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default Login;
