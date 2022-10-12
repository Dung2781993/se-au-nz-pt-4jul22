class Calculator {
  constructor() {
    //Generate random number
    this.id = Math.random();
  }

  #log = (value) => {
    console.log(value);
  };

  add = (num1, num2) => {
    const value = num1 + num2;
    this.#log(value);
    return value;
  };

  subtract = (num1, num2) => {
    const value = num1 - num2;
    this.#log(`Subscription : ${value}`);
    return value;
  };

  addByListArr = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
      sum += item;
    });
    return sum;
  };
}

module.exports = Calculator;
