import React from "react";
import styled from "styled-components";
import TodoListItems from "../TodoListItems/TodoListItems";

const TodoListSection = styled.div`
  height: 2.5rem;
  width: 30.2rem;

  @media screen and (max-width: 650px) {
    width: 21rem;
    height: 1rem;
  }
`;

const TodoList = (props) => {
  return (
    <TodoListSection>
      {props.todoItems.map((todo) => (
        <TodoListItems key={todo.id} id={todo.id} onDelete={props.onDeleteTodo}>
          {todo.text}
        </TodoListItems>
      ))}
    </TodoListSection>
  );
};

export default TodoList;
