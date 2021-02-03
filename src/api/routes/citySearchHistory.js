const express = require("express");
const router = express.Router();
const city_search_history_controller = require("../controllers/citySearchHistoryController");

router
  .route("/")
  .get(city_search_history_controller.citySearchHistory_root_get);

module.exports = router;
