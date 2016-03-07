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
  .controller('MainCtrl', [ '$scope', 'ptConst', 'ptPortSvc', 'ptLogSvc',
    function ($scope, ptConst, ptPortSvc, ptLogSvc) {

      //
      // List of ports
      //
      $scope.ports = ptPortSvc.list();

      /**
       * Toggle connection with port
       */
      $scope.toggleConnect = function (port) {
        if (port.hasOwnProperty('connected')) {
          port.connected = !port.connected;
        }

        ptLogSvc.add(ptConst.LOG.DEBUG,
                     port.name + ' : ' + (port.connected ? 'C' : 'Disc') + 'onnected');
      };
    }
  ]);
