'use strict';

/**
* @ngdoc function
* @name salesManagerApp.controller:DashCtrl
* @description
* # DashCtrl
* Controller of the salesManagerApp
*/
angular.module('salesManagerApp')
.controller('DashController',['$scope', 'Backend', 'dragulaService', function ($scope, Backend, dragulaService) {
  $scope.sortType     = 'orderNum';
  $scope.sortReverse  = false;

  Backend.SalesManData().then(function (response) {
    if (response.data.resultDescription === "SUCCESS") {
      var dataRes = response.data.data;
      var labels = dataRes.map(function (item) {
        return item[0];
      });
      var data = dataRes.map(function (item) {
        return Number(item[1]);
      });
      var options = {
        legend: {
            display: true,
            position: 'left'
        }
      };
      $scope.salesManData = {labels: labels, data: data, options: options};
      //console.log($scope.salesManData);
      // console.log('SalesManData:', response.data.data);
    }
  });
  Backend.LastYearData().then(
    function (response) {
      if (response.data.resultDescription === "SUCCESS") {
        var dataRes = response.data.data;
        var labels = dataRes.map(function (item) {
          return item[0];
        });
        var data = dataRes.map(function (item) {
          return Number(item[1]);
        });
        $scope.lastYearData = {labels: labels, data: data};
        //console.log($scope.lastYearData);
        //console.log('LastYearData:', response.data.data);
      }
    }
  );
  Backend.TopSalesOrders().then(
    function (response) {
      if (response.data.resultDescription === "SUCCESS") {
        $scope.topSalesOrders = response.data.data;
        //console.log('TopSalesOrders:', response.data.data);
        //console.log($scope.topSalesOrders);
      }
    }
  );
  Backend.TopSalesMen().then(
    function (response) {
      if (response.data.resultDescription === "SUCCESS") {
        var dataRes = response.data.data;
        var topSalesMen = dataRes.map(function (item) {
          return {
            "userName": item[0],
            "sales": item[1]
          }
        });
        $scope.topSalesMen = topSalesMen;
        //console.log('TopSalesMen:', response.data.data);
        //console.log($scope.topSalesMen);
      }
    }
  );
}]);
