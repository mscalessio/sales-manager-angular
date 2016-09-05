'use strict';

describe('Directive: salesManData', function () {

  // load the directive's module
  beforeEach(module('salesManagerApp'));

  beforeEach(module('views/salesmandata.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sales-man-data></sales-man-data>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element).not.toEqual('');
  }));
});
