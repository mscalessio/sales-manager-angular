'use strict';

describe('Controller: DashController', function () {

  // load the controller's module
  beforeEach(module('salesManagerApp'));

  var DashController,
  Backend,
  $httpBackend,
  scope,
  baseURL = 'http://localhost:8080';

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Backend_) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expect('GET', baseURL + '/salesmandata').respond(200,
      {resultDescription:"SUCCESS",data:[]}
    );

    $httpBackend.expect('GET', baseURL + '/lastyeardata').respond(200,
      {resultDescription:"SUCCESS",data:[]}
    );

    $httpBackend.expect('GET', baseURL + '/topsalesorders').respond(200,
      {resultDescription:"SUCCESS",data:[]}
    );

    $httpBackend.expect('GET', baseURL + '/topsalesmen').respond(200,
      {resultDescription:"SUCCESS",data:[]}
    );

    Backend = _Backend_;
    scope = $rootScope.$new();
    DashController = $controller('DashController', {
      $scope: scope, Backend: Backend
      // place here mocked dependencies
    });

    $httpBackend.flush();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("should call SalesManData with params and create 'salesMandata' object", function () {
    expect(scope.salesManData).toBeDefined();
  });

  it("should call LastYearData with params and create 'lastYearData' object", function () {
    expect(scope.lastYearData).toBeDefined();
  });

  it("should call TopSalesOrders with params and create 'topSalesOrders' object", function () {
    expect(scope.topSalesOrders).toBeDefined();
  });

  it("should call TopSalesMen with params and create 'topSalesOrders' object", function () {
    expect(scope.topSalesMen).toBeDefined();
  });

});
