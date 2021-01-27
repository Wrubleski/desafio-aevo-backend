require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const currentRouter = require("./src/routes/current");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/current", currentRouter);

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
