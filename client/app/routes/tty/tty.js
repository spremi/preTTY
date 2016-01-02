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
      .state('tty', {
        url: '/tty',
        views: {
          '': {
            templateUrl: 'app/routes/tty/tty.html'
          },
          'head@tty': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          },
          'body@tty': {
            templateUrl: 'app/routes/tty/body.html',
            controller: 'TtyCtrl',
          },
          'foot@tty': {
            templateUrl: 'templates/footer.html',
            controller: 'FooterCtrl'
          }
        }

      });
  });
