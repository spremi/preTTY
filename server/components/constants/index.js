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
  },
  'SOCKET': {
    'SERIAL' : {
      //
      // Requests from the clients
      //
      'REQ' : {
        'LIST'    : 'req!serial.list',
        'OPEN'    : 'req!serial.open',
        'CLOSE'   : 'req!serial.close',
        'WRITE'   : 'req!serial.write',
        'PAUSE'   : 'req!serial.pause',
        'RESUME'  : 'req!serial.resume',
        'FLUSH'   : 'req!serial.flush',
        'DRAIN'   : 'req!serial.drain',
        'ERROR'   : 'req!serial.error',
        'DATA'    : 'req!serial.data'
      },

      //
      // Response to the clients
      //
      'RSP' : {
        'LIST'    : 'rsp!serial.list',
        'OPEN'    : 'rsp!serial.open',
        'CLOSE'   : 'rsp!serial.close',
        'WRITE'   : 'rsp!serial.write',
        'PAUSE'   : 'rsp!serial.pause',
        'RESUME'  : 'rsp!serial.resume',
        'FLUSH'   : 'rsp!serial.flush',
        'DRAIN'   : 'rsp!serial.drain',
        'ERROR'   : 'rsp!serial.error',
        'DATA'    : 'rsp!serial.data'
      }
    }
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
