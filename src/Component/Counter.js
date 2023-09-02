import React from "react";
import { increment, decrement, reset } from "../redux/action/counterAction";
import { Store } from "redux";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();

 
  const count = useSelector((state) => state.counter);
  console.log(count)
  function increase() {
    dispatch(increment());

  }
  return (
    <div>
      like:{count}
      <button onClick={increase}>+</button>
     
    </div>
  );
};

export default Counter;
