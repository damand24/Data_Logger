'use strict';

angular.module('loggerApp')
    .directive('aboutdir', function () {
        return {
            replace: true,
            template: "<div></div>",
            restrict: 'EA',
            link: function (scope, element, attrs) {
                element.text('this is the Directives directive');
                element.on('mouseenter', function () {
                    element.css('cursor', 'pointer');
                    element.css('color', 'red');
                });
                element.on('mouseleave', function () {
                    element.css('color', 'blue');
                });
            }
        };
    });
