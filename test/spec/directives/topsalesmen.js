'use strict';

describe('Directive: topSalesMen', function () {

  // load the directive's module
  beforeEach(module('salesManagerApp'));

  beforeEach(module('views/topsalesmen.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<top-sales-men></top-sales-men>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element).not.toEqual('');
  }));
});
