import React, { useState, useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();
  const [enterdName, setEnteredname] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enterdName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value("");  =>  NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredname("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enterdName}
        />
      </div>
      <div className="form-action">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
