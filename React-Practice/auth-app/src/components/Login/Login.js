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
          Don't have account? <LoginLink to="/signup">SignUp</LoginLink>now
        </Text>
        <Card>
          <TextFiled>Your email</TextFiled>
          <input htmlFor="" placeholder="Enter email"></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            placeholder="Enter password"
          ></input>
          <Button>Sign up</Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default Login;
