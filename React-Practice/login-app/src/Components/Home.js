import React from "react";
import Login from "./Login";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 100px;

  h1 {
    color: white;
    font-size: 2.5rem;
  }

  p {
    margin-top: 15px;
    color: #727272;
    font-size: 1.3rem;
  }
  span {
    color: #727272;
    font-size: 1.3rem;
  }
`;

const LinkTag = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
  a {
    color: white;
    font-weight: 400;
  }
`;

const Home = () => {
  return (
    <div>
      <Heading>
        <h1>Login to Your Account</h1>
        <p>Choose from 130,000 online video courses with new additions</p>
        <span>published every second month</span>
      </Heading>
      <Login />
      <LinkTag>
        <a href="/">Forgot Password?</a>
      </LinkTag>
    </div>
  );
};

export default Home;
