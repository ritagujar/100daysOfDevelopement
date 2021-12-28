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

const SignUp = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
    // console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecords]);

    setUserRegistration({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
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
              value={userRegistration.firstname}
              onChange={handleInput}
            ></input>
            <input
              style={{ marginLeft: "17px" }}
              htmlFor=""
              name="lastname"
              placeholder="Enter last name"
              value={userRegistration.lastname}
              onChange={handleInput}
            ></input>
          </div>
          <TextFiled>Your email</TextFiled>
          <input
            type="email"
            name="email"
            htmlFor=""
            placeholder="Enter email"
            email
            value={userRegistration.email}
            onChange={handleInput}
          ></input>
          <TextFiled>Your password</TextFiled>
          <input
            type="password"
            htmlFor=""
            name="password"
            placeholder="Enter password"
            value={userRegistration.password}
            onChange={handleInput}
          ></input>
          <Button type="submit" onClick={handleSubmit}>
            Sign up
          </Button>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
