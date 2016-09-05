'use strict';

/**
 * @ngdoc directive
 * @name salesManagerApp.directive:salesManData
 * @description
 * # salesManData
 */
angular.module('salesManagerApp')
  .directive('salesManData', function () {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/salesmandata.html'
    };
  });
