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
  .directive('ptFootAttr', function () {
    return {
      templateUrl: 'app/directives/ptFootAttr/ptFootAttr.html',
      restrict: 'E',
      scope: {
        data : '='
      },
      link: function () {
      },
      controller: ['$scope',
        function ($scope) {

          /**
           * Flag - Is mouse hovering?
           */
          $scope.isHover = false;

        }
      ]
    };
  });
