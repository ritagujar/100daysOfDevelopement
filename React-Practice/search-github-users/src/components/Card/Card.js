import React from "react";
import styled from "styled-components";

const CardSection = styled.div`
  height: 30rem;
  width: 21rem;
  background-color: var(--color-black-card);
`;

const Card = (props) => {
  return <CardSection>{props.children}</CardSection>;
};

export default Card;
