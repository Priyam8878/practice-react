import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_new_bird, remove_bird } from "../redux/action/listAction";
import Counter from "./Counter";
const DisplayList = () => {
  const birdArray = useSelector((state) => state.list);
  console.log(birdArray);
  return (
    <>
      {birdArray.map((item) => (
        <div>
          <ul>
            <li>{item}</li>
          </ul>
          <Counter></Counter>
          <button>remove</button>
        </div>
      ))}
    </>
  );
};

export default DisplayList;
