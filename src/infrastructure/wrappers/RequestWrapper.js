const axios = require("axios");

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
