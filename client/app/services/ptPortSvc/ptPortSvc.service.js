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
      this.ports = [];

      /**
       * Return list of available ports
       */
      this.list = function () {
        return this.ports;
      };
    }
  ]);
