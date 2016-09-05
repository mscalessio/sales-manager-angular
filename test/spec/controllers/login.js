'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('salesManagerApp'));

  var LoginController,
    $httpBackend,
    Backend,
    scope,
    baseURL = 'http://localhost:8080';

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Backend_) {
    $httpBackend = _$httpBackend_;
    Backend = _Backend_;
    scope = $rootScope.$new();
    LoginController = $controller('LoginController', {
      $scope: scope, Backend: Backend
      // place here mocked dependencies
    });
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have Login() method defined', function () {
    expect(scope.login).toBeDefined();
  });

  it("should get login success", function () {
    $httpBackend.expect('GET', baseURL + '/login?username=Test&password=Test')
      .respond(200, {sessionId:"c4b0b46a04b54247ac27f3bd4db289a0", loginSucceeded:true});
    var data = {username: "Test", password: "Test"};

    Backend.Login(data)
    .then(function (response) {
      expect(response.data.loginSucceeded).toBeTruthy();
      expect(response.data.sessionId).toEqual("c4b0b46a04b54247ac27f3bd4db289a0");
    });
    $httpBackend.flush();
  });

});
