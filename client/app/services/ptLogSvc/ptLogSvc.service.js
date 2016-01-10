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
  .service('ptLogSvc', [
    function () {

      /**
       * Array of log messages
       */
      this.logs = [];


      /**
       * Appends message to the log
       */
      this.add = function (level, message) {
        var log = {
          'level'   : level,
          'message' : message
        };

        this.logs.push(log);
      };

      /**
       * Return list log messages
       */
      this.list = function () {
        return this.logs;
      };

      /**
       * Clears list of log messages
       */
      this.clear = function () {
        this.logs.length = 0;
      };
    }
  ]);
