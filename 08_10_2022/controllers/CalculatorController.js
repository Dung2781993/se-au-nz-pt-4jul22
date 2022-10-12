"use strict";

const Calculator = require('../Models/Calculator')
const myCalculator = new Calculator();

exports.addOperationByTwoParams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const sum = myCalculator.add(number1, number2);
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.addByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;

    const sum = myCalculator.addByListArr(listElements);

    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.subtractOperation = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const sum = myCalculator.subtract(number1, number2);
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.multiplyOperation = (req, res) => {
  res.send("Multiply");
};

exports.divideOperation = (req, res) => {
  res.send("Divide");
};

exports.postOperation = (req, res) => {
  res.status(200);
  res.json({ success: true, data: 'Post operation successfully' });
};