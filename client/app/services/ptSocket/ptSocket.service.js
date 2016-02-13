//
// preTTY
//
// (c) 2016 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

/* global io */

angular.module('preTtyApp')
  .factory('ptSocket', ['socketFactory',
    function (socketFactory) {

      // socket.io now auto-configures its connection when we ommit a connection url
      var ioSocket = io('', {
        path: '/socket.io-client'
      });

      var socket = socketFactory({ioSocket: ioSocket});

      /**
        * Register handler for messages on the socket
        *
        * @param {String} Message
        * @param {Function} Associated handler
        *
        * @returns Function to unregister the handler
        */
      var register = function (msg, cb) {
        cb = cb || angular.noop;

        var wrapper = function (data) {
          cb(data);
        };

        socket.on(msg, wrapper);

        return function () {
          socket.removeListener(msg, wrapper);
        };
      };

      /**
        * Send message & data via socket
        *
        * @param {String} Message
        * @param {Object} Associated data
        */
      var send = function (msg, data) {
        socket.emit(msg, data);
      };


      return {
        socket    : socket,
        register  : register,
        send      : send
      };
    }
  ]);
