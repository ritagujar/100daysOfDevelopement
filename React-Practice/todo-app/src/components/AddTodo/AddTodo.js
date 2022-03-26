import React, { useState } from "react";
import styled from "styled-components";
// import Button from "../Button";

const AddTodoSection = styled.div`
  display: flex;
  input {
    height: 2.5rem;
    width: 23rem;
    border: 1px solid #ccc;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 0.27rem;
  }

  input:focus {
    outline: none;
    border-color: #8b005d;
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
  font-size: 1rem;
  border-radius: 0.4rem;
  background: #92dff3;
  border: 1px solid #92dff3;

  &:hover {
    border: none;
    background: #b7e9f7;
  }

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
