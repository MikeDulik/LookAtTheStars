'use strict'

/* Controllers */

var starsControllers = angular.module('starsControllers', []);

starsControllers.controller('StarListCtrl', ['$scope', '$http',
  function ($scope, $http){
    $http.get('stars/stars.json').success(function(data) {
      $scope.stars = data;
    });
    //default val of orderProp
    $scope.orderProp = 'distance';
  }
]);

starsControllers.controller('StarDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams){
    $scope.starId = $routeParams.phoneId;
  }
]);
