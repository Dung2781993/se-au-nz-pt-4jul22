import "./App.scss";
import Greeting from "./components/Greeting";
// import {Greeting2} from "./components/Greeting";
import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Calculator from "./components/Calculator";


const Greeting2 = React.lazy(() => import('./components/Greeting'));

const listCities = [
  {
    id: 1,
    city: "Melbourne",
  },
  {
    id: 2,
    city: "Melbourne",
  },
  {
    id: 3,
    city: "London",
  },
  {
    id: 4,
    city: "Sydney",
  },
  {
    id: 5,
    city: "Newyork",
  },
  {
    id: 6,
    city: "Brisbane",
  },
  {
    id: 7,
    city: "Paris",
  },
  {
    id: 8,
    city: "Perth",
  },
  {
    id: 9,
    city: "Auckland",
  },
];

function App() {
  const [formState, setFormState] = React.useState({
    isGoing: true,
    numberOfGuests: 2,
    id: 1
  });

  const handleChange = (event) => {
  };

  const buttonClick = (event) => {

  }



  return (
    <div className="App">
      <Calculator />
      {/* <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={formState.isGoing}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          name="isGoing"
          type="numberOfGuests"
          checked={formState.numberOfGuests}
          onChange={handleChange}
        />
      </label>
      <Button onClick={buttonClick}>Test</Button> */}
    </div>
  );
}

export default App;
