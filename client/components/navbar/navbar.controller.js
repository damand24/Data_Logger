'use strict';

angular.module('loggerApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
      'title': 'Home',
      'link': '/Main'
      },
      {
        'title': 'About',
        'link': '/About'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
