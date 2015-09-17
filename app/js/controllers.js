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

starsControllers.controller('StarDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http){
    $http.get('stars/' + $routeParams.starId + '.json').success(function(data) {
      $scope.star = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }
]);
