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
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/routes/main/main.html'
          },
          'head@main': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          },
          'body@main': {
            templateUrl: 'app/routes/main/body.html',
            controller: 'MainCtrl',
          },
          'foot@main': {
            templateUrl: 'templates/footer.html',
            controller: 'FooterCtrl'
          }
        }
      });
  });
