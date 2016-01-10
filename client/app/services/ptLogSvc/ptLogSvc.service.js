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
  .service('ptLogSvc', [ '$document', '$mdToast',
    function ($document, $mdToast) {

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

        //
        // Show the message in a toast
        //
        $mdToast.show({
          controller  : 'ToastCtrl',
          templateUrl : 'app/services/ptLogSvc/tpl-toast.html',
          parent      : $document[0].querySelector('#pt-body'),
          hideDelay   : 4000,
          position    : 'bottom right',
          locals      : {log : log}
        });
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

      /**
       * Returns availability of log messages
       */
      this.check = function () {
        return this.logs.length > 0 ? true : false;
      };
    }
  ]);
