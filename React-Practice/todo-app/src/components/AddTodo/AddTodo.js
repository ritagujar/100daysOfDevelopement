import React, { useState } from "react";
import styled from "styled-components";
// import Button from "../Button";

const AddTodoSection = styled.div`
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

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const addTodoHandler = (event) => {
    props.onAddTodos(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <AddTodoSection>
      <input
        type="text"
        value={enteredTodo}
        onChange={todoInputChangeHandler}
      />
      <Button onClick={addTodoHandler}>Add Todo</Button>
    </AddTodoSection>
  );
};

export default AddTodo;
