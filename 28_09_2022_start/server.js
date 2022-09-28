const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cinema",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

// app.get("/movies", (req, res) => {
//   const sql = "Select * from movie"; //SQL Query
//   connection.query(sql, (err, results) => {
//     if (err) throw err;

//     const response = {
//       isSuccess: true,
//       data: results,
//       message: "Get movies succesfully",
//     };

//     res.json(response);
//   });
// });

app.get("/movies", (req, res) => {
  try {
    let id = req.query.id;
    if (!id) {
      throw Error("Id not found");
    }
    const sql = `Select id, title, genre, director from movie where id = ${id}`; //SQL Query -> Select query based on condition

    connection.query(sql, (err, results) => {      
      if(results.length == 0) {
        throw Error('No data');
      }
      const response = {
        isSuccess: true,
        data: results,
        message: "Get movies succesfully",
      };
      res.json(response);
    });
  } catch (e) {
    console.log(e);
    const respose = {
        isSuccess: false,
        message: e.message
    }
    res.json(respose);
  }
});

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});

