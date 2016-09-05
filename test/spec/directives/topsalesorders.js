'use strict';

describe('Directive: topSalesOrders', function () {

  // load the directive's module
  beforeEach(module('salesManagerApp'));

  beforeEach(module('views/topsalesorders.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<top-sales-orders></top-sales-orders>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element).not.toEqual('');
  }));
});
