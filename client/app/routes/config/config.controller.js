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
  .controller('ConfigCtrl', [ '$scope', '$state', '$stateParams', 'ptConst', 'ptPortSvc', 'ptLogSvc',
    function ($scope, $state, $stateParams, ptConst, ptPortSvc, ptLogSvc) {

      //
      // List of ports
      //
      $scope.ports = ptPortSvc.list();

      //
      // Selected port (detail view)
      //
      $scope.port = {};

      //
      // Various options used in serial port configuration
      //
      $scope.options = {
        baudRate : ptConst.CONFIG.BAUDRATE,
        dataBits : ptConst.CONFIG.DATABITS,
        parity   : ptConst.CONFIG.PARITY,
        stopBits : ptConst.CONFIG.STOPBITS
      };

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

      //
      // Processing for 'detail' view
      //
      if ($state.is('config.detail')) {
        $scope.portId = $stateParams.id;

        $scope.port = ptPortSvc.get($scope.portId);
      }
    }
  ]);
