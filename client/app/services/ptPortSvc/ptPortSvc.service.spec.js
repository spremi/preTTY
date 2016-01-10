//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

describe('Service: ptPortSvc', function () {

  // load the service's module
  beforeEach(module('preTtyApp'));

  // instantiate service
  var ptPortSvc;
  beforeEach(inject(function (_ptPortSvc_) {
    ptPortSvc = _ptPortSvc_;
  }));

  it('should do something', function () {
    expect(!!ptPortSvc).toBe(true);
  });

});
