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
  .controller('ToastCtrl', [ '$scope', 'ptConst', '$mdToast', 'log',
    function ($scope, ptConst, $mdToast, log) {

      $scope.log = log;

      /**
       * Get the 'class' based on severity level of log.
       */
      $scope.getClass = function () {
        var ret;

        if (log.hasOwnProperty('level')) {
          switch (log.level) {
            case ptConst.LOG.DEBUG:
              ret = 'md-accent';
              break;

            case ptConst.LOG.INFO:
              ret = 'md-accent';
              break;

            case ptConst.LOG.WARN:
              ret = 'md-warn';
              break;

            case ptConst.LOG.ERROR:
              ret = 'md-warn';
              break;

            default:
              ret = 'md-accent';
              break;
          }
        } else {
          ret = 'md-accent';
        }

        return ret;
      };

      /**
       * Hide the toast
       */
      $scope.hide = function () {
        $mdToast.hide();
      };
    }
  ]);
