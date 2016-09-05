'use strict';

/**
* @ngdoc function
* @name salesManagerApp.controller:DashCtrl
* @description
* # DashCtrl
* Controller of the salesManagerApp
*/
angular.module('salesManagerApp')
.controller('DashController',['$scope', 'Backend', function ($scope, Backend) {
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
      $scope.salesManData = {labels: labels, data: data};
      // console.log($scope.salesMandata);
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
        //console.log($scope.topSalesOrders);
        //console.log('TopSalesOrders:', response.data.data);
      }
    }
  );
  Backend.TopSalesMen().then(
    function (response) {
      if (response.data.resultDescription === "SUCCESS") {
        // $scope.topSalesMen = response.data.data;
        //console.log('TopSalesMen:', response.data.data);
        $scope.TopSalesMen = response.data.data
      }
    }
  );
}]);
