require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  res.send("Teste OK");
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
