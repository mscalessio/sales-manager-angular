'use strict';

describe('Controller: HeaderController', function () {

  // load the controller's module
  beforeEach(module('salesManagerApp'));

  var HeaderController,
    $location,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$location_, $rootScope) {
    $location = _$location_;
    scope = $rootScope.$new();
    HeaderController = $controller('HeaderController', {
      $scope: scope, $location: $location
      // place here mocked dependencies
    });
  }));

  it('should have class active to login', function () {
    $location.path('/login');
    expect(scope.isActive).toBeTruthy();
  });
});
