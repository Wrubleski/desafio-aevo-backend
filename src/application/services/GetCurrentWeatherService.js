const RequestWrapper = require("../../infrastructure/wrappers/RequestWrapper");
const { API_KEY } = process.env;

class GetCurrentWeatherService {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.base_url = "http://api.weatherstack.com/current";
  }

  async getData() {
    const requestWrapper = new RequestWrapper();

    const params = { access_key: API_KEY, query: this.req.body.city };
    const response = await requestWrapper.getRequest(this.base_url, params);

    if (response === null) {
      throw new Error("weatherData cant be null.");
    }

    const weatherData = response.data;

    this.isError = weatherData.success === false;

    if (this.isError) {
      throw new Error("Succes flag equals false. Request failed.");
    }

    return await weatherData;
  }
}

module.exports = GetCurrentWeatherService;
