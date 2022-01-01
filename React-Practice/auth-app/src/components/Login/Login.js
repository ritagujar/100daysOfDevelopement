import React from "react";
import "../../../src/index.css";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  StyleText,
  Text,
  Card,
  TextFiled,
  Button,
  LoginLink,
} from "./styles";

const isEmail = (value) => value.includes("@");
const passwordCheck = (value) => value.length >= 6;

const Login = () => {
  const navigate = useNavigate();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangedHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(passwordCheck);

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

    navigate(-1);
  };
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
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
            className={emailClasses}
            type="text"
            htmlFor=""
            placeholder="Enter email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}

          <TextFiled>Your password</TextFiled>
          <input
            className={passwordClasses}
            type="password"
            htmlFor=""
            placeholder="Enter password"
            vlaue={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
          {passwordHasError && (
            <p className="error-text">
              Please Enter a password more than 6 digits.
            </p>
          )}

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
