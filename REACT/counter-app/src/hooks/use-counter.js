import { useState, useEffect } from "react";

// Always start the function name with 'use'
// In building custom hooks
const useCounter = (forwards = true) => {
  const [couter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return couter;
};

export default useCounter;
