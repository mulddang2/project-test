// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import "./redux/style.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { RootState } from "./redux/store";

export default function App() {
  const { count } = useSelector((state: RootState) => state.counter1); // see store.ts
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        +10
      </button>
    </div>
  );
}
