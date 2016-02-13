//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


/*
 * socket.io event handlers for component - serial.
 */

'use strict';


var serial = require('./index.js');

//
// Include constants
//
var C = require('../constants');

var logger = require('../logger');

//
// Module identifier for logger
//
var LOGID = C.MODULE.SERIAL + '(socket) ';


/**
 * Register event handlers
 */
exports.register = function(socket) {

  //
  // List available ports
  //
  socket.on(C.SOCKET.SERIAL.REQ.LIST, function () {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.LIST);

    serial.list(this);
  });

  //
  // Open a port
  //
  socket.on(C.SOCKET.SERIAL.REQ.OPEN, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.OPEN);

    serial.open(this, arg);
  });

  //
  // Close a port
  //
  socket.on(C.SOCKET.SERIAL.REQ.CLOSE, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.CLOSE);

    serial.close(this, arg);
  });


  //
  // Pause a port
  //
  socket.on(C.SOCKET.SERIAL.REQ.PAUSE, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.PAUSE);

    serial.pause(this, arg);
  });

  //
  // Resume a port
  //
  socket.on(C.SOCKET.SERIAL.REQ.RESUME, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.RESUME);

    serial.resume(this, arg);
  });

  //
  // Flush data on port
  //
  socket.on(C.SOCKET.SERIAL.REQ.FLUSH, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.FLUSH);

    serial.flush(this, arg);
  });

  //
  // Drain data on port
  //
  socket.on(C.SOCKET.SERIAL.REQ.DRAIN, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.DRAIN);

    serial.drain(this, arg);
  });

  //
  // Write to a port
  //
  socket.on(C.SOCKET.SERIAL.REQ.WRITE, function (arg) {
    logger.info(LOGID + 'Received - ' + C.SOCKET.SERIAL.REQ.WRITE);

    serial.write(this, arg);
  });
}
