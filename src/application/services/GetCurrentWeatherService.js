const requestWrapper = require("../../infrastructure/wrappers/RequestWrapper");
const { API_KEY } = process.env;

class GetCurrentWeatherService {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.base_url = "http://api.weatherstack.com/current";
  }

  async getData() {
    const params = { access_key: API_KEY, query: this.req.body.city };
    const response = await requestWrapper.getRequest(this.base_url, params);
    return await response.data;
  }
}

module.exports = GetCurrentWeatherService;
