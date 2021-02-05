const mongoose = require("mongoose");
const cityModel = require("../../infrastructure/models/cityModel");

class DummieDB {
  startDummieDB() {
    mongoose.connect(process.env.MONGO_TEST_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "connection error:"));
    return this.db;
  }

  async stopDummieDB() {
    console.log("\nClosing db connection\n");
    return this.db.close();
  }

  async dropCityModel() {
    console.log("\nDropping all documents from cityModel");
    return cityModel.deleteMany({});
  }
}

module.exports = DummieDB;
