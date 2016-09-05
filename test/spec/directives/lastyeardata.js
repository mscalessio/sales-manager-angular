'use strict';

describe('Directive: lastYearData', function () {

  // load the directive's module
  beforeEach(module('salesManagerApp'));

  beforeEach(module('views/lastyeardata.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<last-year-data></last-year-data>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element).not.toEqual('');
  }));
});
