import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
const TodoHeading = styled.h1``;
const TodoSection = styled.div`
  margin-top: 1rem;

  input {
    height: 2.5rem;
    width: 23rem;
  }

  @media screen and (max-width: 650px) {
    input {
      width: 15rem;
    }
  }
`;
const Button = styled.button`
  margin-left: 1rem;
  height: 2.5rem;
  width: 6.5rem;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    width: 5rem;
  }
`;

const Todo = () => {
  return (
    <>
      <Section>
        <TodoHeading>Todo List</TodoHeading>
        <TodoSection>
          <input type="text" />
          <Button>Add Todo</Button>
        </TodoSection>
      </Section>
    </>
  );
};

export default Todo;
