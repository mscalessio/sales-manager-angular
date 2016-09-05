'use strict';

describe('Service: Backend', function () {

  // load the service's module
  beforeEach(module('salesManagerApp'));

  // instantiate service
  var Backend,
    baseURL = 'http://localhost:8080';
  beforeEach(inject(function (_Backend_) {
    Backend = _Backend_;
  }));

  it('should do something', function () {
    expect(!!Backend).toBe(true);
  });

  it("should be an object", function () {
    expect(typeof Backend).toBe('object');
  });

  it("should have Login() method", function () {
    expect(Backend.Login).toBeDefined();
  });

  it("should have SetSession() method", function () {
    expect(Backend.SetSession).toBeDefined();
  });

  it("should have ClearSession() method", function () {
    expect(Backend.ClearSession).toBeDefined();
  });

  it("should have SalesManData() method", function () {
    expect(Backend.SalesManData).toBeDefined();
  });

  it("should have LastYearData() method", function () {
    expect(Backend.LastYearData).toBeDefined();
  });

  it("should have TopSalesOrders() method", function () {
    expect(Backend.TopSalesOrders).toBeDefined();
  });

  it("should have TopSalesMen() method", function () {
    expect(Backend.TopSalesMen).toBeDefined();
  });

});
