const GetCurrentWeatherService = require("../services/GetCurrentWeatherService");
const CityRepository = require("../infrastructure/repositories/CityRepository");

exports.current_root_post = async (req, res) => {
  const getCurrentWeatherServicenew = new GetCurrentWeatherService(req, res);
  const weatherData = await getCurrentWeatherServicenew.getData();
  const cityRepository = new CityRepository();
  await cityRepository.addOrUpdateCity(weatherData);
  res.send(weatherData);
};

exports.current_root_get = async (req, res) => {
  const cityRepository = new CityRepository();
  const data = await cityRepository.getCities();

  res.send(
    data.map((city) => {
      return {
        id: city._id,
        city: city.cityName,
        state: city.regionName,
        country: city.countryName,
        count: city.cityCount,
      };
    })
  );
};
