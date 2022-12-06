import React from "react";
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import InputLabel from "@mui/material/InputLabel";
import "../styles/LifeHook.css";
import FlipCard from "./FlipCard";
import Greeting from "./Greeting";

class LifeHook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', isLoggedIn: true };
  }

  componentDidMount() {
    console.log("ComponentDidMount run");
  }

  tick() {
    console.log("Call tick function");
    this.setState({ data: new Date() });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount run");
  }

  render() {
    const handleSubmit = (event) => {
      //event.preventDefault();
      let params = {
        name: this.state.name
      }
      console.log(params);
    };

    const handleChange = (event) => {
      this.setState({
        name: event.target.value
      });
    }

    console.log("Render run");
    return (
      <div>
        {/* <form variant="standard" onSubmit={handleSubmit}>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={this.state.name} onChange={handleChange} />
          <Button className="laser-button" variant="contained" type="submit">Submit</Button>
        </form> */}
        {(this.state.isLoggedIn) ? <FlipCard /> : <Greeting/>}
      </div>
    );
  }
}

export default LifeHook;
