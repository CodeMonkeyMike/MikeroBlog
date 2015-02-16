'use strict';

/**
 * @ngdoc function
 * @name mikeroBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mikeroBlogApp
 */
angular.module('mikeroBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
