const cityModel = require("../models/cityModel");

class CityRepository {
  async addOrUpdateCity(weatherData) {
    this.weatherData = weatherData;

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
  }

  async getCities() {
    return await cityModel.find().sort({ cityCount: -1 }).limit(6);
  }
}

module.exports = CityRepository;
