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
    },
    'BCAST' : {
      'LOG' : {
        'STATUS' : 'pt!log.status'
      }
    },
    //
    // Serial port config options
    //
    'CONFIG' : {
      'BAUDRATE' : {
        'B115200' : 115200,
        'B57600'  :  57600,
        'B38400'  :  38400,
        'B28800'  :  28800,
        'B19200'  :  19200,
        'B9600'   :   9600,
        'B4800'   :   4800,
        'B2400'   :   2400,
        'B1800'   :   1800,
        'B1200'   :   1200,
        'B600'    :    600,
        'B300'    :    300
      },
      'DATABITS' : {
        'D5'  : 5,
        'D6'  : 6,
        'D7'  : 7,
        'D8'  : 8
      },
      'STOPBITS' : {
        'S1'  : 1,
        'S2'  : 2
      },
      'PARITY': {
        'PN'  : 'None',
        'PO'  : 'Odd',
        'PE'  : 'Even',
        'PM'  : 'Mark',
        'PS'  : 'Space'
      },
      'FLOWCONTROL' : {
        'FNN' : 'NONE',
        'FXX' : 'XON_XOFF',   // XON/XOFF
        'FRC' : 'RTS_CTS',    // RTS/CTS
        'FXR' : 'BOTH'        // XON/XOFF + RTS/CTS
      }
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
  });
