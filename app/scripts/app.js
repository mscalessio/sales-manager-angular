'use strict';

/**
* @ngdoc overview
* @name salesManagerApp
* @description
* # salesManagerApp
*
* Main module of the application.
*/
angular
.module('salesManagerApp', [
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'angular-loading-bar',
  'chart.js',
  angularDragula(angular)
])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/dash.html',
    controller: 'DashController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .otherwise({
    redirectTo: '/'
  });

  $httpProvider.interceptors.push(['$q', '$rootScope', '$location', '$templateCache', function($q, $rootScope, $location, $templateCache) {
    return {
      'request': function (config) {
        //config.headers = config.headers || {};
        config.params = config.params || {};
        if (config.method === 'GET' && $templateCache.get(config.url) === undefined && $rootScope.globals.currentUser) {
          config.params.sessionid = $rootScope.globals.currentUser.sessionId;
        }
        return config;
      },
      'response': function (result) {
        if (result.data.data === null && result.data.resultDescription === "User is not logged in") {
          $location.url('/login');
        }
        return result;
      },
      'responseError': function(response) {
        if(response.status === 400 || response.status === 401 || response.status === 403) {
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  }]);
}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
function ($rootScope, $location, $cookieStore, $http) {
  $rootScope.globals = $cookieStore.get('globals') || {};

  // if ($rootScope.globals.currentUser) {
  //   $rootScope.loggedIn = true;
  // } else {
  //   $rootScope.loggedIn = false;
  // }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in
    if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
      $location.path('/login');
    }
  });
}]);
