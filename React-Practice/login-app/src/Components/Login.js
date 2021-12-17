import React from "react";

import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  input {
    height: 55px;
    width: 333px;
    margin-top: 15px;
    border-radius: 5px;
    padding: 15px;
    font-size: 0.9rem;
    color: white;
    border: none;
  }
  @media (max-width: 715px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 49px;

  input {
    background-color: #222222;
    color: #727272;
  }

  button {
    margin-top: 15px;
    height: 55px;
    width: 333px;
    border-radius: 6px;
    text-align: left;
    padding: 15px;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    border: none;
    background-image: linear-gradient(80deg, #ac3678, #d8314f, #fa8246);
  }

  button:hover {
    background-image: linear-gradient(-80deg, #fa8246, #ac3678, #d8314f);
  }
`;
const RightLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 49px;
  margin-right: 10px;

  input {
    background-color: #161616;
    border: 2px solid transparent;
  }
`;

const Slash = styled.div`
  margin-top: 143px;
  color: #727272;
  font-size: 36px;
  padding: 0 40px;

  @media (max-width: 785px) {
    padding: 0 10px;
  }
  @media (max-width: 715px) {
    display: none;
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LeftLogin>
          <input type="text" placeholder="8 Digit Pin" />
          <input type="text" placeholder="Teacher/Student Id" />
          <button>Login To Your Account</button>
        </LeftLogin>
        <Slash>/</Slash>
        <RightLogin>
          <input
            style={{
              borderImage: `linear-gradient(80deg, #894b9d, #85411e)`,
              borderImageSlice: 1,
            }}
            type="text"
            placeholder="Sign in with Google"
          />

          <input
            style={{
              borderImage: `linear-gradient(-80deg, #894b9d, #85411e)`,
              borderImageSlice: 1,
            }}
            type="text"
            placeholder="Sign in with Facebook"
          />

          <input
            style={{
              borderImage: `linear-gradient(80deg, #894b9d, #85411e)`,
              borderImageSlice: 1,
              color: "#fff",
            }}
            type="text"
            placeholder="Sign in with Apple Account"
          />
        </RightLogin>
      </LoginContainer>
    </>
  );
};

export default Login;
