import { useState, useEffect } from "react";

// Always start the function name with 'use'
// In building custom hooks
const useCounter = () => {
  const [couter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return couter;
};

export default useCounter;
