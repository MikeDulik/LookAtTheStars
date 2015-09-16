'use strict'

/* Controllers */

var starsApp = angular.module('starsApp', []);

starsApp.controller('StarListCtrl', function($scope) {
  $scope.stars = [
    {'name': 'Star 1',
    'snippet': 'Star 1 info yayy',
    'distance': 2343525},
    {'name': 'Star 2',
    'snippet': 'Star 2 stuff heyyooo',
    'distance': 230472309840293},
    {'name': 'Star 3',
    'snippet': 'Star 3 information brooo',
    'distance': 2355}
  ];

  $scope.orderProp = 'distance';
});
