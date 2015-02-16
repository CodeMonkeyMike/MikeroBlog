'use strict';

/**
 * @ngdoc function
 * @name mikeroBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mikeroBlogApp
 */
angular.module('mikeroBlogApp')
  .controller('MainCtrl', function ($scope, myFactory) {
    $scope.posts = myFactory.getPosts();
  });
