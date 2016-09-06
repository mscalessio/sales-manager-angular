'use strict';

/**
 * @ngdoc function
 * @name salesManagerApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the salesManagerApp
 */
angular.module('salesManagerApp')
  .controller('HeaderController',['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) === 0;
    };
  }]);
