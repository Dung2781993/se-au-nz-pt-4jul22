import React, { useState } from "react";
import { render } from "react-dom";
import {AppContext} from "../App";


const Color = () => {
  const value = React.useContext(AppContext);
  console.log(value);
  return (
    <div>
      <p>{value.number}</p>
      <button onClick={() => value.setNumber(value.number++)}>Click</button>
    </div>
  );
};

export default Color;
