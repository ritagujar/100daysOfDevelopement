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

const SignUp = () => {
  return (
    <>
      <SignUpContainer>
        <StyleText>Sign up</StyleText>
        <Text>
          Already have an account? <LoginLink to="/login">Login</LoginLink>now
        </Text>
        <Card>
          <div style={{ marginBottom: "7px" }}>
            <TextFiled>First Name</TextFiled>
            <TextFiled style={{ marginLeft: "127px" }}>Last Name</TextFiled>
          </div>
          <div>
            <input htmlFor="" placeholder="Enter first name"></input>
            <input
              style={{ marginLeft: "17px" }}
              htmlFor=""
              placeholder="Enter last name"
            ></input>
          </div>
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

export default SignUp;
