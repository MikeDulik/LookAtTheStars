'use strict'

/* Controllers */

var starsApp = angular.module('starsApp', []);

starsApp.controller('StarListCtrl', function($scope){
  $scope.stars = [
    {
      "distance": 0.0000158128,
      "id": "the-sun",
      "imageUrl": "img/stars/sun.jpg",
      "name": "Sun",
      "snippet": "The Sun is the star at the center of our Solar System and is by far the most important source of energy for life on Earth."
    },
    {
      "distance": 16.77,
      "id": "altair",
      "imageUrl": "img/stars/altair.jpg",
      "name": "Altair",
      "snippet": "Altair is the brightest star in the constellation Aquila and the twelfth brightest star in the night sky."
    }
  ];

  //default val of orderProp
  $scope.orderProp = 'distance';
});
