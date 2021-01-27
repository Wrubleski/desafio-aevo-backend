const express = require("express");
const router = express.Router();
const GetCurrentWeatherService = require("../services/GetCurrentWeatherService");

router.post("/", async (req, res) => {
  const getCurrentWeatherServicenew = new GetCurrentWeatherService(req, res);
  const weatherData = await getCurrentWeatherServicenew.getData();
  res.send(weatherData);
});

module.exports = router;
