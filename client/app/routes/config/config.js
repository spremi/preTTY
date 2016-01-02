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
        views: {
          '': {
            templateUrl: 'app/routes/config/config.html'
          },
          'head@config': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          },
          'body@config': {
            templateUrl: 'app/routes/config/body.html',
            controller: 'ConfigCtrl',
          },
          'foot@config': {
            templateUrl: 'templates/footer.html',
            controller: 'FooterCtrl'
          }
        }
      });
  });
