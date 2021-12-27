import React from "react";
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
  return (
    <>
      <SignUpContainer>
        <StyleText>Login</StyleText>
        <Text>
          Don't have an account? <LoginLink to="/signup">SignUp</LoginLink>now.
        </Text>
        <Card>
          <TextFiled>Your email</TextFiled>
          <input type="email" htmlFor="" placeholder="Enter email"></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            placeholder="Enter password"
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
          <Button type="submit">Sign up</Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default Login;
