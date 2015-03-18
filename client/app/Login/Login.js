'use strict';

angular.module('loggerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/Login/Login.html',
        controller: 'LoginCtrl'
      });
  });
