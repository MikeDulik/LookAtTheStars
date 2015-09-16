'use strict'

/* Controllers */

var starsApp = angular.module('starsApp', []);

starsApp.controller('StarListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/stars/stars.json').success(function(data){
    $scope.stars = data;
  });
  //default val of orderProp
  $scope.orderProp = 'distance';
}]);
