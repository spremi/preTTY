//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

describe('Directive: ptHeader', function () {

  // load the directive's module and view
  beforeEach(module('preTtyApp'));
  beforeEach(module('app/directives/ptHeader/ptHeader.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pt-header></pt-header>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the ptHeader directive');
  }));
});