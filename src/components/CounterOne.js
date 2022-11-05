import React, { useReducer } from "react";
import { Link } from 'react-router-dom';
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
    default:
      return { count: state.count };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
        <h1 className="header">Counter App with useReducer</h1>
      <div className="count">Count = {state.count}</div>
      <br />
      <br />
      <div>
        <button className="buttons" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="buttons" onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button className="buttons" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        </div>
        <div className="mini-div">
        <h3>Click on the button below to see a Custom Counter App</h3>
        <button className='goback_button'><Link to="/countertwo" className="link">Click Me!</Link></button>
        </div>
        
      </div>
  );
};

export default Counter;

// First, we initialize the state with 0, then we create a reducer function
// that accepts the current state of our count as an argument and an action.
// The state is updated by the reducer based on the action type.
// increment, decrement, and reset are all action types that, when dispatched,
// update the state of our app accordingly.

// To increment the state count const initialState = { count: 0 },
// we simply set count to state.count + 1 when the increment action type is dispatched.
