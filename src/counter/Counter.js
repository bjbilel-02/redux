import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { decrement, increment } from "../redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
