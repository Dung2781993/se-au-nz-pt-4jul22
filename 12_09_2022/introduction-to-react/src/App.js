import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "react-dom";

//Font-Awesome
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <iconify-icon icon="mdi:youtube-gaming"></iconify-icon>
      <FontAwesomeIcon icon={faCity} />
    </div>
  );
}

export default App;
