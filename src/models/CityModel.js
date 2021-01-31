const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  cityName: String,
  countryName: String,
  regionName: String,
  cityCount: Number,
});

module.exports = mongoose.model("City", CitySchema);
