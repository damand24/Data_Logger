'use strict';

angular.module('loggerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.message = 'Hello';
      $scope.cclick = function () {
        $scope.message = 'long hello';
      };

  });
