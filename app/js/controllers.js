'use strict'

/* Controllers */

var starsApp = angular.module('starsApp', []);

starsApp.controller('StarListCtrl', function($scope) {
  $scope.stars = [
    {'name': 'Star 1',
    'snippet': 'Star 1 info yayy'},
    {'name': 'Star 2',
    'snippet': 'Star 2 stuff heyyooo'}
  ];
});
