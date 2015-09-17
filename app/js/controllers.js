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

// starsControllers.controller('StarDetailCtrl', function($scope){
//   $scope.star =
//   {
//     "star": "The Sun",
//     "angularDiameter": "30 arcminutes",
//     "radius": "1.0",
//     "distance": "Approximately 1au from Earth",
//     "imager": "Resolvable with the naked eye. Solar telescope.",
//     "info": "The Sun is the star at the center of the Solar System and is by far the most important source of energy for life on Earth. It is a nearly perfect spherical ball of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. Its diameter is about 109 times that of Earth, and it has a mass about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun's mass consists of hydrogen; the rest is mostly helium, with much smaller quantities of heavier elements, including oxygen, carbon, neon and iron.",
//     "images": [
//       "img/stars/sun.jpg",
//       "img/stars/sun1.png",
//       "img/stars/sun2.jpg",
//       "img/stars/sun3.jpg"
//     ]
//   }
//   $scope.mainImageUrl = $scope.star.images[0];
//   $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//   };
// });
