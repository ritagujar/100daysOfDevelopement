import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import {
  SignUpContainer,
  StyleText,
  Text,
  Card,
  TextFiled,
  Button,
  LoginLink,
} from "./styles";

const isNotEmpty = (value) => value >= 6;
const isEmail = (value) => value.includes("@");

const Login = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    // hasError: emailHasError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    // hasError: emailHasError,
    valueChangedHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITED!!!");
    console.log(emailValue);

    resetEmail();
    resetPassword();
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
            type="text"
            htmlFor=""
            placeholder="Enter email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            placeholder="Enter password"
            vlaue={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
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
          <Button type="submit" onClick={submitHandler}>
            Sign up
          </Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default Login;
