const { default: axios } = require("axios");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;
const _ = require('lodash');
const helper = require('./helper')


const ALLOWED_GROUP_BY_FIELDS = ['gender'];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (request, response) => {
  try {
    response.status = 200;
    response.send("Welcome to Node.js");
  } catch (e) {
    console.log(e);
  }
});

//Testing return HTML
app.get("/hello", (request, response) => {
  try {
    response.set("Content-type", "text/html");
    response.status(200).send("<h1>Hello World</h1>");
  } catch (e) {
    console.log(e);
  }
});

//Testing return JSON
app.get("/hello-json", (request, response) => {
  try {
    response.set("Content-type", "application/json");
    response.end(JSON.stringify({ value: "Hello Word" }));
  } catch (e) {
    console.log(e);
  }
});

//Using fetch for getting data from API endpoint - Return JSON value
app.get("/data-fetch", async (req, res) => {
  try {
    const URL =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const response = await fetch(URL);
    const data = await response.json();

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});

//Using axois for getting data from API endpoint - Return JSON value
app.get("/data-axios", async (req, res) => {
  try {
    const URL =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const response = await axios.get(URL, { responeType: "json" });
    const data = response.data;

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});

//Nobel Prize: https://api.nobelprize.org/2.1/laureates?_ga=2.118313294.677912167.1663999161-677682824.1663999161
app.get("/Nobel-prize-fetch", async (req, res) => {
  try {
    const URL =
      "https://api.nobelprize.org/2.1/laureates?_ga=2.118313294.677912167.1663999161-677682824.1663999161";

    const response = await fetch(URL);
    const data = await response.json();

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});

app.get("/Nobel-prize-axios", async (req, res) => {
  try {
    const URL =
      "https://api.nobelprize.org/2.1/laureates?_ga=2.118313294.677912167.1663999161-677682824.1663999161";

    const response = await axios.get(URL, { responeType: "json" });
    const data = response.data.laureates;
    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});

app.get("/Nobel-prize", async (req, res) => {
  try {
    const query = req.query;

    const URL =
      "https://api.nobelprize.org/2.1/laureates?_ga=2.118313294.677912167.1663999161-677682824.1663999161";

    const response = await axios.get(URL, { responeType: "json" });
    const listPrize = response.data.laureates;

    let queryResult = [];

    //Filter the nobel prize based on continent level
    if (query.continent) {
      listPrize.forEach(item => {
        if(item?.birth?.place?.continent?.en === query.continent) {
          queryResult.push(item);
        }
      });
    }

    //Handle Group By
    if (query.groupBy && !ALLOWED_GROUP_BY_FIELDS.includes(query.groupBy)) {
      throw Error('Group By field is not allowed');
    }

    //Handle Group By
    if (query.groupBy && ALLOWED_GROUP_BY_FIELDS.includes(query.groupBy)) {
      let groupBy = query.groupBy;
      queryResult = helper.groupBy(queryResult, (item) => item[groupBy]);
    }

    //Checking query is empty - otherwise return the response from API
    const result = (_.isEmpty(query)) ? response : queryResult;

    res.set("Content-type", "application/json");
    res.end(
      JSON.stringify({
        isSuccess: false,
        message: "Get Price by continent succesfully",
        data: result,
      })
    );
  } catch (e) {
    res.end(JSON.stringify({ isSuccess: false, message: e.message }));
    throw Error(e);
  }
});

app.get("/meme-axios", async (req, res) => {
  try {
    const URL = "http://alpha-meme-maker.herokuapp.com";

    const response = await axios.get(URL, { responeType: "json" });
    const data = response.data;

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});


//Post request
app.post('/login', (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  
  res.end(JSON.stringify({  isSuccess: true, message: `Login succesfully - Username: ${username} - Password: ${password}` }));
})


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});


