import React from "react";
import styled from "styled-components";
import TodoListItems from "../TodoListItems/TodoListItems";

const TodoListSection = styled.div``;

const TodoList = (props) => {
  return (
    <TodoListSection>
      {props.todoItems.map((todo) => (
        <TodoListItems key={todo.id} id={todo.id}>
          {todo.text}
        </TodoListItems>
      ))}
    </TodoListSection>
  );
};

export default TodoList;
