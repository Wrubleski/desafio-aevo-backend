const CityHistoryService = require("../../application/services/CityHistoryService");

exports.citySearchHistory_root_get = async (req, res) => {
  const cityHistoryService = new CityHistoryService();
  res.send(await cityHistoryService.getSearchHistory());
};
