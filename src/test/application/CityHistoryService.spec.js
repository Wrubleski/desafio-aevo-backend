"use strict";

require("assert");
const chai = require("chai");
const CityHistoryService = require("../../application/services/CityHistoryService");
const CityRepository = require("../../infrastructure/repositories/CityRepository");
const sinon = require("sinon");
let sandbox;

const { expect } = chai;

const cityHistoryService = new CityHistoryService();

describe("City History Service Test.", () => {
  before(() => {
    console.log("Starting tests on CityRepository class.");
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("Testing getSearchHistory method", () => {
    it("Should return mapped cities with new keys.", async () => {
      const getCitiesMochedResponse = [];
      const expectedOutput = [];

      for (let i = 0; i < 6; i++) {
        getCitiesMochedResponse.push({
          _id: i,
          cityName: "city-" + i,
          regionName: "region-" + i,
          countryName: "country-" + i,
          cityCount: 0,
        });

        expectedOutput.push({
          id: i,
          city: "city-" + i,
          state: "region-" + i,
          country: "country-" + i,
          count: 0,
        });
      }

      sandbox
        .stub(CityRepository.prototype, "getCities")
        .resolves(getCitiesMochedResponse);

      return expect(await cityHistoryService.getSearchHistory()).to.deep.equal(
        expectedOutput
      );
    });
  });
});
