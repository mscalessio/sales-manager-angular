'use strict';

/**
 * @ngdoc directive
 * @name salesManagerApp.directive:topSalesMen
 * @description
 * # topSalesMen
 */
angular.module('salesManagerApp')
  .directive('topSalesMen', function () {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/topsalesmen.html'
    };
  });
