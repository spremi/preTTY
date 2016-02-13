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
  .controller('TtyCtrl', [ '$scope', '$stateParams', 'ptConst', 'ptPortSvc',
    function ($scope, $stateParams, ptConst, ptPortSvc) {
      //
      // Port Id
      //
      $scope.portId = $stateParams.id;

      //
      // Port object
      //
      $scope.port = ptPortSvc.get($scope.portId);
    }
  ]);
