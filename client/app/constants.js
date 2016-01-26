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
    }
  });
