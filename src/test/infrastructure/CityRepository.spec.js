"use strict";

require("assert");
const chai = require("chai");
const Dummydb = require("../dummies/dbDummy");
const CityRepository = require("../../infrastructure/repositories/CityRepository");
const cityModel = require("../../infrastructure/models/cityModel");

chai.use(require("chai-as-promised"));

const { expect } = chai;

const cityRepository = new CityRepository();
const dummiedb = new Dummydb();

describe("City Repository Test.", () => {
  before(() => {
    console.log("Starting tests on CityRepository class.");
    dummiedb.startDummieDB();
  });

  describe("Testing addOrUpdateCity method. Make sure your testing DB is up and running.", () => {
    it("Should return created object if valid weather data is sent", async () => {
      const location = {
        name: "Test-1-name",
        country: "Test-1-country",
        region: "Test-1-location",
      };

      const document = await cityRepository.addOrUpdateCity({
        location,
      });

      const { cityName, countryName, regionName } = document;
      const { name, country, region } = location;

      expect({
        cityName,
        countryName,
        regionName,
      }).to.deep.equal({
        cityName: name,
        countryName: country,
        regionName: region,
      });
    });

    it("should increase cityCount by one if city already exists", async () => {
      await cityRepository.addOrUpdateCity({
        location: {
          name: "Test-4-name",
          country: "Test-4-country",
          region: "Test-4-location",
        },
      });

      expect(
        await cityRepository.addOrUpdateCity({
          location: {
            name: "Test-4-name",
            country: "Test-4-country",
            region: "Test-4-location",
          },
        })
      ).to.have.property("cityCount", 2);
    });

    after(async () => {
      await dummiedb.dropCityModel();
    });
  });

  describe("Testing addOrUpdateCity method.", () => {
    before("Adding multiple documents into database.", async () => {
      CityRepository.prototype.addMany = function (documents) {
        return cityModel.insertMany(documents);
      };

      const arr = [];

      for (let i = 1; i < 10; i++) {
        arr.push({
          cityName: "Test-name-" + i,
          countryName: "Test-country-" + i,
          regionName: "Test-location-" + i,
        });
      }

      await cityRepository.addMany(arr);
    });

    it("should return only 6 documents.", async () => {
      expect((await cityRepository.getCities()).length).to.equal(6);
    });
  });
});
after(async () => {
  await dummiedb.dropCityModel();
  await dummiedb.stopDummieDB();
  console.log("Test finished");
});
