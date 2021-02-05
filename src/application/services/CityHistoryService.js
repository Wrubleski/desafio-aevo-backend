const CityRepository = require("../../infrastructure/repositories/CityRepository");

class CityHistoryService {
  async getSearchHistory() {
    const cityRepository = new CityRepository();
    const data = await cityRepository.getCities();
    return data.map((city) => {
      return {
        id: city._id,
        city: city.cityName,
        state: city.regionName,
        country: city.countryName,
        count: city.cityCount,
      };
    });
  }

  async addOrUpdate(weatherData) {
    const cityRepository = new CityRepository();
    return await cityRepository.addOrUpdateCity(weatherData);
  }
}

module.exports = CityHistoryService;
