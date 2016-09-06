'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('salesManagerApp'));

  var LoginController,
    $httpBackend,
    $location,
    $cookieStore,
    Backend,
    scope,
    baseURL = 'http://localhost:8080';

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$location_, _$cookieStore_, _Backend_) {
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $cookieStore = _$cookieStore_;
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
    spyOn(Backend, "Login").and.callThrough();
    spyOn(Backend, "SetSession").and.callThrough();

    var RESPONSE_SUCCESS = {sessionId:"c4b0b46a04b54247ac27f3bd4db289a0", loginSucceeded:true};
    var data = {username: "Test", password: "Test"};

    $httpBackend.when('GET', baseURL + '/login', {params: data}).respond(200, RESPONSE_SUCCESS);

    expect(Backend.Login).not.toHaveBeenCalled();
    expect(Backend.SetSession).not.toHaveBeenCalled();

    scope.login();
    $httpBackend.flush();
    
    expect(Backend.Login).toHaveBeenCalled();
    expect(Backend.SetSession).toHaveBeenCalled();
    expect($location.path()).toBe('/');
    expect($cookieStore.get('globals')).not.toEqual('');
  });

});
