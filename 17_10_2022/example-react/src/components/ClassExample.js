import React from "react";
class ClassExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: "great",
      hungry: false,
      counter: 0,
      cart: [],
      total: 0,
      weather: "Summer",
    };

    this.windBlows = this.windBlows.bind(this);
  }
  
  windBlows = () => {
    this.setState({ weather: "Winter" });
  };

  render() {
    const updateMood = () => {
      this.setState({ mood: "Bad", hungry: true });
      this.setState({ counter: this.state.counter + 1 });
    };

    return (
      <div>
        <button onClick={updateMood}>Update Mood Status</button>
        <div>Our mood is {this.state.mood}</div>
        <div>Counter value is {this.state.counter}</div>
        <div>WindBlow is {this.state.weather}</div>
      </div>
    );
  }
}

export default ClassExample;
