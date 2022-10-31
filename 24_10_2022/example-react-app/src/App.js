//  @TODO1 - Convert the components to a functional component using Hooks

import React, { useState } from "react";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";
import ClockStart from "./components/ClockStart";
import Color from "./components/Color";

const number = 10;

export const AppContext = React.createContext(number);

const App = () => {
  const [number, setNumber] = useState(20);
  return (
    <div>
      <AppContext.Provider value={{ number, setNumber }}>
        <Color />

      </AppContext.Provider>
    </div>
  );
};

export default App;
