'use strict';

/**
 * @ngdoc directive
 * @name salesManagerApp.directive:topSalesOrders
 * @description
 * # topSalesOrders
 */
angular.module('salesManagerApp')
  .directive('topSalesOrders', function () {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/topsalesorders.html'
    };
  });
