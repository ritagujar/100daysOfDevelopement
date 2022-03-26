import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";
// import Button from "./Button";

import AddTodo from "../AddTodo/AddTodo";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
const TodoHeading = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  line-height: 28px;
`;
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

  const deleteTodoHandler = (todoId) => {
    setAddTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (addTodos.length > 0) {
    content = (
      <TodoList todoItems={addTodos} onDeleteTodo={deleteTodoHandler} />
    );
  }

  return (
    <>
      <Section>
        <TodoHeading>Todo List</TodoHeading>
        <TodoSection>
          <AddTodo onAddTodos={addTodoHandler} />
        </TodoSection>
        {content}
      </Section>
    </>
  );
};

export default Todo;
