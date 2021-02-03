const CityHistoryService = require("../../application/services/CityHistoryService");

exports.citySearchHistory_root_get = async (req, res, next) => {
  try {
    const cityHistoryService = new CityHistoryService();
    res.send(await cityHistoryService.getSearchHistory());
  } catch (err) {
    next(err);
  }
};
