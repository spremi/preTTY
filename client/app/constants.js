//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('preTtyApp')
  .constant('ptConst', {
    //
    // Severity level of log messages
    //
    'LOG' : {
      'DEBUG' : 0,
      'INFO'  : 1,
      'WARN'  : 2,
      'ERROR' : 3
    }
  });
