import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // useDispatch() Hook gives us back the dispatch function which we can execute.
  // dispatch is a fuction, a function which we can call, which will dispatch an action against our Redux store.

  const dispatch = useDispatch();

  // useSelector is used to get data out of the store.
  //The function we pass to useSelector will be executed by react-redux
  //which then basically determines which piece of data  we wanna extract from out store.

  const increamentHandler = () => {
    dispatch({ type: "increament" });
  };

  const decreamentHandler = () => {
    dispatch({ type: "decreament" });
  };

  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
