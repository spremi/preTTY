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
  .service('ptPortSvc', [
    function () {
      /**
       * Array of known ports.
       *
       * All ports may not be currently active. But we may want to maintain
       * the data - in anticipation of reconnection.
       */
      this.ports = [
        {
          id        : 'port0',
          name      : 'Port 0',
          connected : false,
          phys      : {
            comName       : '/dev/ttyUSB0',
            manufacturer  : 'Dummy_Inc.',
            serialNumber  : 'Dummy_Inc.0000',
            vendorId      : '0x1234',
            productId     : '0x5678'
          }
        },
        {
          id        : 'port1',
          name      : 'Port 1',
          connected : false,
          phys      : {
            comName       : '/dev/ttyUSB1',
            manufacturer  : 'Dummy_Inc.',
            serialNumber  : 'Dummy_Inc.0001',
            vendorId      : '0x1234',
            productId     : '0x567'
          }
        }
      ];

      /**
       * Return list of available ports
       */
      this.list = function () {
        return this.ports;
      };
    }
  ]);
