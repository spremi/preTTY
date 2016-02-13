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
  .directive('ptFooter', function () {
    return {
      templateUrl: 'app/directives/ptFooter/ptFooter.html',
      restrict: 'E',
      scope: {},
      link: function () {
      },
      controller: ['$scope', '$state', '$stateParams', 'ptPortSvc', 'ptLogSvc',
        function ($scope, $state, $stateParams, ptPortSvc, ptLogSvc) {

          /**
           * Flag - Are logs available?
           */
          $scope.logAvail = ptLogSvc.check();

          /**
           * Listen for changes in log status
           */
          ptLogSvc.listen($scope, function (event, data) {

            if (data === true) {
              $scope.logAvail = true;
            } else {
              $scope.logAvail = false;
            }
          });

          if ($state.is('tty')) {
            //
            // Get port configuration
            //
            $scope.portId = $stateParams.id;

            $scope.port = ptPortSvc.get($scope.portId);
          }

        }
      ]
    };
  });
