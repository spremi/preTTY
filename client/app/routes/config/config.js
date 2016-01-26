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
        abstract: true,
        url: '/config',
        templateUrl: 'app/routes/config/config.html'
      })
      .state('config.list', {
        url: '/list',
        views: {
          'head@config': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          },
          'body@config': {
            templateUrl: 'app/routes/config/body.list.html',
            controller: 'ConfigCtrl'
          },
          'foot@config': {
            templateUrl: 'templates/footer.html',
            controller: 'FooterCtrl'
          }
        }
      })
      .state('config.detail', {
        url: '/detail/:id',
        controller: 'ConfigCtrl',
        views: {
          'head@config': {
            templateUrl: 'templates/header.html',
            controller: 'HeaderCtrl'
          },
          'body@config': {
            templateUrl: 'app/routes/config/body.detail.html',
            controller: 'ConfigCtrl'
          },
          'foot@config': {
            templateUrl: 'templates/footer.html',
            controller: 'FooterCtrl'
          }
        }
      });
  });
