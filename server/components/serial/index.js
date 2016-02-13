//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


/*
 * Serial port interface
 */

'use strict';

var SerialFactory = require('serialport');

var SerialObj = SerialFactory.SerialPort;


/**
 * Module object
 */
function modserial() {
}

//
// Include constants
//
var C = require('../constants');


//
// Module identifier for logger
//
var LOGID = C.MODULE.SERIAL;


var logger = require('../logger');
logger.info(LOGID + 'Initializing...');


/**
 * Returns an object for 'success' response
 */
function rspSuccess() {
  return {status: C.STATUS.OK};
}


/**
 * Returns an object for 'failure' response
 */
function rspFailure() {
  return {status: C.STATUS.ER};
}


/**
 * List available serial ports
 */
modserial.list = function (socket) {
  logger.debug(LOGID + 'list()');
};

/**
 * Open a port
 */
modserial.open = function (socket, arg) {
  logger.debug(LOGID + 'open()');
};

/**
 * Close a port
 */
modserial.close = function (socket, arg) {
  logger.debug(LOGID + 'close()');
};

/**
 * Write to a port
 */
modserial.write = function (socket, arg) {
  logger.debug(LOGID + 'write()');
};

/**
 * Pause connection to a port
 */
modserial.pause = function (socket, arg) {
  logger.debug(LOGID + 'pause()');
};

/**
 * Pause connection to a port
 */
modserial.pause = function (socket, arg) {
  logger.debug(LOGID + 'pause()');
};

/**
 * Resume connection to a port
 */
modserial.resume = function (socket, args) {
  logger.debug(LOGID + 'resume()');
};

/**
 * Flush data received on a port
 */
modserial.flush = function (socket, arg) {
  logger.debug(LOGID + 'flush()');
};

/**
 * Drain data waiting to be written on a port
 */
modserial.drain = function (socket, arg) {
  logger.debug(LOGID + 'drain()');
};


//
// Export the module object
//
if (typeof module === 'undefined') {
  exports = modserial;
} else {
  exports = module.exports = modserial;
}
