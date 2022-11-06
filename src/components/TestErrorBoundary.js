import React, { useReducer } from "react";
import "../App.css"

const initialState = { count: 0 };
// The reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
      case "setValue":
        return { count: action.payload };  
      default:
        throw new Error();
    //   return { count: state.count };
  }
}

const TestErrorBoundary = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
        <h1 className="header">Error Boundary Test</h1>
      <div className="count">Count = {state.count}</div>
      <br />
      <br />
      <div>
        <button className="buttons" onClick={() => dispatch({ type: "incre" })}>
          Increment
        </button>
        <button className="buttons" onClick={() => dispatch({ type: "res" })}>Reset</button>
        <button className="buttons" onClick={() => dispatch({ type: "decre" })}>
          Decrement
        </button>
        <button className="buttons" onClick={() => dispatch({ type: "setVal" })}>Set Value</button>
        </div>
      </div>
  );
};

export default TestErrorBoundary;
