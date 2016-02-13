//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


/*
 * Winston logger
 */

'use strict';

var winston = require('winston');

winston.emitErrs = true;

var logger = new winston.Logger({
  transports : [
    new winston.transports.File({
      level             : 'info',
      filename          : 'pre-tty.log',
      handleExceptions  : true,
      json              : true,
      maxsize           : 5242880,
      maxFiles          : 5,
      colorize          : false
    }),
    new winston.transports.Console({
      level             : 'debug',
      handleExceptions  : true,
      json              : false,
      colorize          : true
    })
  ],
  exitOnError : false
});


logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};


//
// Export the module object
//
if (typeof module === 'undefined') {
  exports = logger;
} else {
  exports = module.exports = logger;
}
