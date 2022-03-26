import React from "react";
import styled from "styled-components";

const TodoListItemsSection = styled.div`
  margin: 1rem 0;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: #92dff3;
  font-size: 1rem;
  font: bold;
  padding: 1rem 2rem;
  color: #000000;
  cursor: pointer;
`;

const TodoListItems = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <TodoListItemsSection onClick={deleteHandler}>
      {props.children}
    </TodoListItemsSection>
  );
};

export default TodoListItems;
