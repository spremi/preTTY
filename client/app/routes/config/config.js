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
  .config(function ($stateProvider) {
    $stateProvider
      .state('config', {
        url: '/config',
        templateUrl: 'app/routes/config/config.html',
        controller: 'ConfigCtrl'
      });
  });