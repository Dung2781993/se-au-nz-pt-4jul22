require("dotenv").config();

const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

//Enable all cors for all request
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./routes/filmRouter.js")(app);

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});
