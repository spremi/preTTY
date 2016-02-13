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
  .directive('ptHeader', function () {
    return {
      templateUrl: 'app/directives/ptHeader/ptHeader.html',
      restrict: 'E',
      scope: {},
      link: function () {
      },
      controller: ['$scope', '$state', '$stateParams', 'ptPortSvc',
        function ($scope, $state, $stateParams, ptPortSvc) {
          /**
           * Flag - Is window maximized?
           */
          $scope.isMax = false;

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
