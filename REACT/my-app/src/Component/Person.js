import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm a {props.name} ans I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
