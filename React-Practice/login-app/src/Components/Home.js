import React from "react";
import Login from "./Login";
import styled from "styled-components";

const Heading = styled.div`
  text-align: center;
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

  @media (max-width: 715px) {
    display: inline-block;
    padding-left: 100px;
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
    </div>
  );
};

export default Home;
