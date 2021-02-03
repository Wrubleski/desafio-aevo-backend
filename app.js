require("dotenv").config();
require("./src/infrastructure/dbConfig");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const currentWeather = require("./src/api/routes/currentWeather");
const citySearchHistory = require("./src/api/routes/citySearchHistory");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/current", currentWeather);
app.use("/api/city-search-history", citySearchHistory);

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
