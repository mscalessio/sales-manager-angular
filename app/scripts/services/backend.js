'use strict';

/**
* @ngdoc service
* @name salesManagerApp.backend
* @description
* # backend
* Factory in the salesManagerApp.
*/
angular.module('salesManagerApp')
.constant('baseURL', 'http://localhost:8080')
.factory('Backend',['$http', '$cookieStore', '$rootScope', 'baseURL', function ($http, $cookieStore, $rootScope, baseURL) {
  var services = {};

  services.Login = function (data) {
    return $http.get(baseURL + '/login', {params: data});
  };

  services.SetSession = function (username, sessionId) {
    $rootScope.globals = {
      currentUser: {
        username: username,
        sessionId: sessionId
      }
    };
    $cookieStore.put('globals', $rootScope.globals);
    $rootScope.loggedIn = true;
  };

  services.ClearSession = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $rootScope.loggedIn = false;
  };

  services.SalesManData = function () {
    return $http.get(baseURL + '/salesmandata');
  };

  services.LastYearData = function () {
    return $http.get(baseURL + '/lastyeardata');
  };

  services.TopSalesOrders = function () {
    return $http.get(baseURL + '/topsalesorders');
  };

  services.TopSalesMen = function () {
    return $http.get(baseURL + '/topsalesmen');
  };

  return services;

}]);
