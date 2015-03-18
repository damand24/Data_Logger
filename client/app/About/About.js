'use strict';

angular.module('loggerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/About', {
        templateUrl: 'app/About/About.html',
        controller: 'AboutCtrl'
      });
  });
