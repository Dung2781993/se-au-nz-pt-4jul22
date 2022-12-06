"use strict";

module.exports = (app) => {
  var calculator = require("../controllers/CalculatorController");
  var weather = require("../controllers/WeatherController");

  //Root router
  app.get("/", (req, res) => {
    res.send("Main Page");
  });

  //Calculator Operation
  app.route("/operation/add").get(calculator.addOperationByTwoParams);

  app.route("/operation/subtract").get(calculator.subtractOperation);
  app.route("/operation/mutiply").get(calculator.multiplyOperation);
  app.route("/operation/divide").get(calculator.divideOperation);

  app.route("/operation").post(calculator.postOperation);

  app.route("/apiWeather").get(weather.getWeatherByLocation);


  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};
