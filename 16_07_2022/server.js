const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//http://localhost:3000/ : Listen on port 3000
app.listen(3000)