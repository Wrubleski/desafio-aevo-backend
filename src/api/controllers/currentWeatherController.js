const GetCurrentWeatherService = require("../../application/services/GetCurrentWeatherService");
const CityHistoryService = require("../../application/services/CityHistoryService");

exports.current_root_post = async (req, res, next) => {
  try {
    const getCurrentWeatherService = new GetCurrentWeatherService(req, res);
    const cityHistoryService = new CityHistoryService();
    const weatherData = await getCurrentWeatherService.getData();
    cityHistoryService.addOrUpdate(weatherData);
    res.send(weatherData);
  } catch (err) {
    next(err);
  }
};
