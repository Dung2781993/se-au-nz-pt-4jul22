const express = require("express");
const app = express();

let concatString = (name) => {
  let result = `Hello {name}`;
  console.log
  return result;
};

app.get("/", function (req, res) {
  res.send(concatString("Test"));
});

//http://localhost:3000/ : Listen on port 3000
app.listen(3000);
