"use strict";

require("assert");
const chai = require("chai");
const RequestWrapper = require("../../infrastructure/wrappers/RequestWrapper");

const requestWrapper = new RequestWrapper();

chai.use(require("chai-as-promised"));

const { API_KEY } = process.env;
const { expect } = chai;

describe("Request Wrapper test.", () => {
  before(() => {
    console.log("Starting tests on RequestWrapper class.");
  });

  describe("Testing getRequest method", () => {
    it("Should return status code 200 on successful request.", async () => {
      const response = await requestWrapper.getRequest(
        "http://api.weatherstack.com/current",
        { access_key: API_KEY, query: "Curitiba" }
      );

      return expect(response.status).to.equal(200);
    });
  });
});
