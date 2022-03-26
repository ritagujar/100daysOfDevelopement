import React, { useState } from "react";
import styled from "styled-components";
// import Button from "./Button";

import AddTodo from "../AddTodo/AddTodo";

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
  display: flex;
`;

const Todo = () => {
  const [addTodos, setAddTodos] = useState([]);

  const addTodoHandler = (enteredText) => {
    setAddTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  return (
    <>
      <Section>
        <TodoHeading>Todo List</TodoHeading>
        <TodoSection>
          <AddTodo onAddTodos={addTodoHandler} />
          {/* <Button>Add Todo</Button> */}
        </TodoSection>
        {addTodos.map((items, id) => items)}
      </Section>
    </>
  );
};

export default Todo;
