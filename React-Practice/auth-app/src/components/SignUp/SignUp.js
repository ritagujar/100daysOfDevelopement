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

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const passwordCheck = (value) => value.length >= 6;

const SignUp = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    // hasError: firstNameHasError,
    valueChangedHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    // hasError: lastNameHasError,
    valueChangedHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

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

  // const [userRegistration, setUserRegistration] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  // });

  // const [records, setRecords] = useState([]);

  // const handleInput = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUserRegistration({ ...userRegistration, [name]: value });
  //   // console.log(name, value);
  // };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // const newRecords = {
    //   ...userRegistration,
    //   id: new Date().getTime().toString(),
    // };
    // console.log(records);
    // setRecords([...records, newRecords]);

    // setUserRegistration({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   password: "",
    // });

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITTED");
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  return (
    <>
      <SignUpContainer>
        <StyleText>Sign up</StyleText>
        <Text>
          Already have an account? <LoginLink to="/login">Login</LoginLink>now.
        </Text>
        <Card>
          <div style={{ marginBottom: "7px" }}>
            <TextFiled>First Name</TextFiled>
            <TextFiled style={{ marginLeft: "127px" }}>Last Name</TextFiled>
          </div>
          <div>
            <input
              htmlFor=""
              name="firstname"
              placeholder="Enter first name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            ></input>
            <input
              style={{ marginLeft: "17px" }}
              htmlFor=""
              name="lastname"
              placeholder="Enter last name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            ></input>
          </div>
          <TextFiled>Your email</TextFiled>
          <input
            type="text"
            name="email"
            htmlFor=""
            placeholder="Enter email"
            email
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            name="password"
            placeholder="Enter password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
          <Button type="submit" onClick={submitHandler}>
            Sign up
          </Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
