'use strict';

/**
 * @ngdoc function
 * @name salesManagerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the salesManagerApp
 */
angular.module('salesManagerApp')
  .controller('LoginController',['$scope', '$location', 'Backend', function ($scope, $location, Backend) {

    Backend.ClearSession();

    $scope.login = function () {
      var data = {username: $scope.username, password: $scope.password};
      Backend.Login(data).then(function (response) {
        if (response.data.loginSucceeded === true && response.data.sessionId !== null) {
          Backend.SetSession(data.username, response.data.sessionId);
          $location.path('/');
        } else {
        $scope.error = 'Invalid credentials';
        }
      },
      function (response) {
        console.log(response);
        $scope.error = 'Connection error';
      });
    };
  }]);
