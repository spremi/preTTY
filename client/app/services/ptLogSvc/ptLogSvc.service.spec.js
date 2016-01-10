//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

describe('Service: ptLogSvc', function () {

  // load the service's module
  beforeEach(module('preTtyApp'));

  // instantiate service
  var ptLogSvc;
  beforeEach(inject(function (_ptLogSvc_) {
    ptLogSvc = _ptLogSvc_;
  }));

  it('should do something', function () {
    expect(!!ptLogSvc).toBe(true);
  });

});
