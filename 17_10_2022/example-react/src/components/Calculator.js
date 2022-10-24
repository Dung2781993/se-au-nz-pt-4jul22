import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, result: 0 };
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeA(event) {
    event.preventDefault();
    this.setState({ a: event.target.value });
  }

  handleChangeB(event) {
    event.preventDefault();

    this.setState({ b: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (event.target.operators.value) {
      case "+":
        this.setState({
          result: parseInt(this.state.a) + parseInt(this.state.b),
        });
        break;
      case "-":
        this.setState({
          result: parseInt(this.state.a) - parseInt(this.state.b),
        });
        break;
      case "*":
        this.setState({
          result: parseInt(this.state.a) * parseInt(this.state.b),
        });
        break;
      case "/":
        this.setState({
          result: parseInt(this.state.a) / parseInt(this.state.b),
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <>
            <label>
              A:
              <input
                type="text"
                value={this.state.a}
                onChange={this.handleChangeA}
              />
            </label>
          </>
          <br />

          <>
            <label>
              Op:
              <select name="operators" id="operators">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>
          </>
          <br />

          <>
            <label>
              B:
              <input
                type="text"
                value={this.state.b}
                onChange={this.handleChangeB}
              />
            </label>
            <input type="submit" value="Submit" />
          </>
        </form>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
