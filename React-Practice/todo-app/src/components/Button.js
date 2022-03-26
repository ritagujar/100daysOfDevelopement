import React from "react";
import styled from "styled-components";

const ButtonSection = styled.button`
  margin-left: 1rem;
  height: 2.5rem;
  width: 6.5rem;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    width: 5rem;
  }
`;

const Button = (props) => {
  return <ButtonSection>{props.children}</ButtonSection>;
};

export default Button;
