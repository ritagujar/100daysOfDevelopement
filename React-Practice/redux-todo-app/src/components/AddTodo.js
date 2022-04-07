import React, { useState } from "react";
import "./style.css";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [add, setAdd] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const updatedTodo = {
      content: todo,
      id: Math.random().toString(),
    };
    setAdd([...add, updatedTodo]);
    setTodo("");
  };

  const updatedTodo = (id) => {
    const updatedTodo = add.filter((i) => i.id !== id);
    setAdd(updatedTodo);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="add_section">
        {add.map((item) => (
          <>
            <p key={item.id} onClick={() => updatedTodo(item.id)}>
              {item.content}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
