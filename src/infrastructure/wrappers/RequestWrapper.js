const axios = require("axios");

// If i ever need to change the HTTP client, with this wrapper I`ll only need to change it in one place.
class RequestWrapper {
  async getRequest(path, params) {
    const request = await axios({
      method: "GET",
      url: path,
      params: params,
    });

    return await request;
  }
}

module.exports = new RequestWrapper();
