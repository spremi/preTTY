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
  .service('ptPortSvc', ['$q', 'ptConst', 'ptSocket',
    function ($q, ptConst, ptSocket) {

      var self = this;

      /**
       * Template object representing a port, including default configuration.
       *
       * Maintained here, until save/restore to a file is implemented.
       */
      var tplPort = {
        id        : '',
        name      : '',
        connected : false,
        phys      : {},
        conf      : {
          baudRate  : ptConst.CONFIG.BAUDRATE.B115200,
          dataBits  : ptConst.CONFIG.DATABITS.D8,
          parity    : ptConst.CONFIG.PARITY.PN,
          stopBits  : ptConst.CONFIG.STOPBITS.S1
        }
      };

      /*
       * Array of visible serial ports.
       */
      this.ports = [];

      //
      // Deferred objects for each operation that require one
      //
      this.deferred = {
        refresh : null
      };


      /**
       * Request to get list of available ports
       */
      this.refresh = function () {
        this.deferred.refresh = $q.defer();

        ptSocket.send(ptConst.SOCKET.SERIAL.REQ.LIST);

        return this.deferred.refresh.promise;
      };

      /**
       * Register listener for initial list of available ports
       */
      ptSocket.register(ptConst.SOCKET.SERIAL.RSP.LIST, function (obj) {
        if (typeof obj === 'object') {
        if (obj.status === ptConst.STATUS.OK) {

            for (var i = 0; i < obj.ports.length; i++) {
              var port = JSON.parse(JSON.stringify(tplPort));

              port.phys = JSON.parse(JSON.stringify(obj.ports[i]));
              port.name = obj.ports[i].comName.split('/').pop();

              this.ports.push(port);
            }
            this.deferred.refresh.resolve(this.ports.length);
          } else {
            this.deferred.refresh.reject(obj.err);
          }
        } else {
          this.deferred.refresh.reject('Invalid response');
        }
      }.bind(this));


      /**
       * Return list of available ports
       */
      this.list = function () {
        return this.ports;
      };

      /**
       * Return number ports available
       */
      this.count = function () {
        return this.ports.length;
      };

      /**
       * Return port matching specified id.
       */
      this.get = function (id) {
        var port  = {};
        var found = false;
        var i;

        for (i = 0; (!found && (i < this.ports.length)); i++) {
          if (this.ports[i].id === id) {
            port  = this.ports[i];
            found = true;
          }
        }

        return port;
      };
    }
  ]);
