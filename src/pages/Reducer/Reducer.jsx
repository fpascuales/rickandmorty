import React, { useReducer } from "react";
import "./Reducer.css";

const INITIAL_STATE = { count: 0, evilCount: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "SUMA_COUNT":
      return { count: state.count + 1, evilCount: state.evilCount - 1 };
    case "RESTA_COUNT":
      return { count: state.count - 1, evilCount: state.evilCount + 1 };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const Reducer = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <button onClick={() => dispatch({type: "SUMA_COUNT"})}>+</button>
      <button onClick={() => dispatch({type: "RESTA_COUNT"})}>-</button>
      <button onClick={() => dispatch({type: "RESET"})}>reset</button>
      <h1>{state.count}</h1>
      <h1>{state.evilCount}</h1>
    </div>
  );
};

export default Reducer;