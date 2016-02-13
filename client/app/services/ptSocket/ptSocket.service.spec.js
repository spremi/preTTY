//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

describe('Service: ptSocket', function () {

  // load the service's module
  beforeEach(module('preTtyApp'));

  // instantiate service
  var ptSocket;
  beforeEach(inject(function (_ptSocket_) {
    ptSocket = _ptSocket_;
  }));

  it('should do something', function () {
    expect(!!ptSocket).toBe(true);
  });

});
