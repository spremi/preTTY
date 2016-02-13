//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


/*
 * socket.io configuration
 */

'use strict';

var config = require('./environment');


/**
 * Handle 'connect' requests from client
 */
function onConnect(socket) {

  /**
   * Handle the 'info' request from client
   */
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  console.info('[' + socket.address + '] CONNECTED.');

  //
  // Register handlers
  //
  require('../components/serial/serial.socket.js').register(socket);
}

/**
 * Handle 'disconnect' requests
 */
function onDisconnect(socket) {
  console.info('[' + socket.address + '] DISCONNECTED.');
}

/**
 * Handle 'end' requests
 */
function onEnd(socket) {
  console.info('[' + socket.address + '] ENDS.');
}


/**
 * Implement the main 'Socket IO' event loop.
 */
var sockobj = function (socketio) {

  //
  // Wait for socket connection
  //
  socketio.on('connection', function (socket) {
    socket.address = socket.request.connection.remoteAddress !== undefined ?
                      socket.request.connection.remoteAddress + ':' + socket.request.connection.remotePort :
                      process.env.DOMAIN;

    socket.connectedAt = new Date();

    //
    // Handler for 'disconnect' event
    //
    socket.on('disconnect', function () {
      onDisconnect(socket);
    });

    //
    // Handler for 'end' event
    //
    socket.on('end', function () {
      onEnd(socket);
    });

    //
    // Invoke the 'connect' handler
    //
    onConnect(socket);
  });
};


//
// Export the module object
//
if (typeof module === 'undefined') {
  exports = sockobj;
} else {
  exports = module.exports = sockobj;
}
