'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mikeroBlogApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an array of objects to the scope', function () {
    expect(scope.posts).not.toBeNull();
  });
});
