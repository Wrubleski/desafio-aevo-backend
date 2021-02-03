const express = require("express");
const router = express.Router();
const current_weather_controller = require("../controllers/currentWeatherController");

router.route("/").post(current_weather_controller.current_root_post);

module.exports = router;
