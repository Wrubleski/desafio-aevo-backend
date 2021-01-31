const CityModel = require("../../models/CityModel");

class CityRepository {
  async addOrUpdateCity(weatherData) {
    this.weatherData = weatherData;
    this.isError = this.weatherData.success === false ? true : false;

    if (!this.isError) {
      const { name, country, region } = this.weatherData.location;

      return await CityModel.findOneAndUpdate(
        {
          cityName: name,
          countryName: country,
          regionName: region,
        },
        { $inc: { cityCount: 1 } },
        { upsert: true, useFindAndModify: false }
      );
    }
  }

  async getCities() {
    return await CityModel.find().sort({ cityCount: -1 }).limit(6);
  }
}

module.exports = CityRepository;
