import { useState } from "react";

export default function UseCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };
  const setValue = (num) => {
    setCount(5);
  };
  return [count, increment, decrement, reset, setValue];
};


