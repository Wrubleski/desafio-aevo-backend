const cityModel = require("../models/cityModel");

class CityRepository {
  async addOrUpdateCity(weatherData) {
    this.weatherData = weatherData;

    if (this.weatherData === null) {
      throw new Error("weatherData cant be null.");
    }

    this.isError = this.weatherData.success === false ? true : false;

    if (!this.isError) {
      const { name, country, region } = this.weatherData.location;

      return await cityModel.findOneAndUpdate(
        {
          cityName: name,
          countryName: country,
          regionName: region,
        },
        { $inc: { cityCount: 1 } },
        { upsert: true, useFindAndModify: false, new: true }
      );
    } else {
      throw new Error("Succes flag equals false. Request failed.");
    }
  }

  async getCities() {
    return await cityModel.find().sort({ cityCount: -1 }).limit(6);
  }
}

module.exports = CityRepository;
