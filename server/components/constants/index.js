//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


/*
 * Constants
 */

'use strict';


var modconst = {
  'MODULE' : {
    'APP'     : '[S] app: ',
    'SERIAL'  : '[S] serial: ',
    'SOCKET'  : '[S] socket: '
  },
  'STATUS' : {
    'OK'  : 'ok',
    'ER'  : 'err'
  }
};


//
// Export the module object
//
if (typeof module === 'undefined') {
  exports = modconst;
} else {
  exports = module.exports = modconst;
}
