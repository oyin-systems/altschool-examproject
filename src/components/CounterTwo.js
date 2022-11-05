import React from "react";
import useCounter from "./useCounter";
import { Link } from "react-router-dom";
import "../App.css"

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className="counter">
        <h1 className="header">Counter App with Custom Counter Hook</h1>
      <div className="count">Count = {count}</div>
      <br />
      <br />
      <div>
      <button className="buttons" onClick={increment}>Increment</button>
      <button className="buttons" onClick={reset}>Reset</button>
      <button className="buttons" onClick={decrement}>Decrement</button>
</div>

      <div className="mini-div">
        <h3>Click on the button below to go back</h3>
        <button className="goback_button">
          <Link to="/" className="link">
            Click Me!
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
