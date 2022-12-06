import React, { useState } from "react";

const Example = () => {
  const [counter, setCounter] = useState(0); //State

  const handleClick = () => {
    setCounter(counter + 1)
    console.log("counter", counter);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment counter</button>
      <div>Counter value is {counter}</div>
    </div>
  );
};
export default Example;
