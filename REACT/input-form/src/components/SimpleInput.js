import React, { useState, useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();
  const [enterdName, setEnteredname] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enterdName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = '';  =>  NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredname("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enterdName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-action">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
