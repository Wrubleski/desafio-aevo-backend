"use strict";

require("assert");
const chai = require("chai");
const GetCurrentWeatherService = require("../../application/services/GetCurrentWeatherService");
const sinon = require("sinon");
const RequestWrapper = require("../../infrastructure/wrappers/RequestWrapper");

const getCurrentWeatherService = new GetCurrentWeatherService(
  { body: { city: "teste" } },
  {}
);
let sandbox;

chai.use(require("chai-as-promised"));

const { expect } = chai;

describe("Get Current Weather Service test.", () => {
  before(() => {
    console.log("Starting tests on GetCurrentWeatherService class.");
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe("Testing getData method.", () => {
    it("Should throw an error if response is null", async () => {
      sandbox.stub(RequestWrapper.prototype, "getRequest").resolves(null);

      await expect(getCurrentWeatherService.getData()).to.be.rejectedWith(
        Error,
        "weatherData cant be null."
      );
    });

    it("Should throw an error if succes flag received is set to false", async () => {
      sandbox
        .stub(RequestWrapper.prototype, "getRequest")
        .resolves({ data: { success: false } });

      await expect(getCurrentWeatherService.getData()).to.be.rejectedWith(
        Error,
        "Succes flag equals false. Request failed."
      );
    });
  });
});
