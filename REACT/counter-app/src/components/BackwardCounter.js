import React, { useEffect, useState } from "react";
import Card from "./Card";

const ForwardCounter = () => {
  const [couter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{couter}</Card>;
};

export default ForwardCounter;
