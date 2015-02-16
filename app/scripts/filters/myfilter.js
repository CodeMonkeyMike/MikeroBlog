'use strict';

/**
 * @ngdoc filter
 * @name mikeroBlogApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the mikeroBlogApp.
 */
angular.module('mikeroBlogApp')
  .filter('myFilter', function () {
    return function (html) {
      return Math.ceil(String(html).replace(/<[^>]+>/gm, '').length / 140);
    };
  });
