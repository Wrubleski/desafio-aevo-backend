const axios = require("axios");
const { API_KEY } = process.env;

class GetCurrentWeatherService {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.base_url = "http://api.weatherstack.com/current";
  }

  getData = async () => {
    const response = await axios({
      method: "GET",
      url: this.base_url,
      params: { access_key: API_KEY, query: this.req.body.city },
    });
    return await response.data;
  };
}

module.exports = GetCurrentWeatherService;
