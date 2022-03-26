import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

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

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputChangeHandler = (event) => {
    // if (event.target.value.trim().length > 0) {

    // }

    setEnteredTodo(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodos(enteredTodo);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <AddTodoSection>
        <input type="text" onChange={todoInputChangeHandler} />
        <Button>Add Todo</Button>
      </AddTodoSection>
    </form>
  );
};

export default AddTodo;
