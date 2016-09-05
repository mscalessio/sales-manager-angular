'use strict';

/**
 * @ngdoc directive
 * @name salesManagerApp.directive:lastYearData
 * @description
 * # lastYearData
 */
angular.module('salesManagerApp')
  .directive('lastYearData', function () {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/lastyeardata.html'
    };
  });
