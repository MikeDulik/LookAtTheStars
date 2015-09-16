'use strict'

/* Controllers */

var starsApp = angular.module('starsApp', []);

starsApp.controller('StarListCtrl', function($scope){
  $scope.stars = [
    {
      "distance": 0.0,
      "id": "sun",
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
    },
    {
      "distance": 643.0,
      "id": "betelgeuse",
      "imageUrl": "img/stars/betelgeuse.jpg",
      "name": "Betelgeuse",
      "snippet": "Betelgeuse, also known by its Bayer designation Alpha Orionis, is the ninth-brightest star in the night sky and second-brightest in the constellation of Orion."
    },
    {
      "distance": 204.0,
      "id": "r-doradus",
      "imageUrl": "img/stars/doradus.jpg",
      "name": "R Doradus",
      "snippet": "R Doradus is the name of a red giant Mira variable star in the far-southern constellation Dorado, although visually it appears more closely associated with the constellation Reticulum."
    },
    {
      "distance": 420.0,
      "id": "mira",
      "imageUrl": "img/stars/mira.jpg",
      "name": "Mira (Omicron Ceti)",
      "snippet": "Mira is a red giant star estimated 200–400 light years away in the constellation Cetus. Mira is a binary star, consisting of the red giant Mira A along with Mira B."
    },
    {
      "distance": 2000.0,
      "id": "epsilon-aurigae",
      "imageUrl": "img/stars/epsilon.jpg",
      "name": "Epsilon Aurigae",
      "snippet": "Epsilon Aurigae is the Bayer designation for a star in the northern constellation of Auriga."
    },
    {
      "distance": 54.7,
      "id": "beta-cassiopeiae",
      "imageUrl": "img/stars/beta.jpg",
      "name": "Beta Cassiopeiae",
      "snippet": "Beta Cassiopeiae is a Delta Scuti variable star in the constellation Cassiopeia. It is a subgiant or giant star belonging to the spectral class F2."
    },
    {
      "distance": 79.3,
      "id": "regulus",
      "imageUrl": "img/stars/regulus.jpg",
      "name": "Regulus (Alpha Leonis A)",
      "snippet": "Regulus is the brightest star in the constellation Leo and one of the brightest stars in the night sky, lying approximately 79 light years from Earth. Regulus is a multiple star system composed of four stars that are organized into two pairs."
    },
    {
      "distance": 93.0,
      "id": "algol",
      "imageUrl": "img/stars/algol.jpg",
      "name": "Algol (Beta Persei ABC)",
      "snippet": "Algol, known colloquially as the Demon Star, is a bright star in the constellation Perseus. It is one of the best known eclipsing binaries, the first such star to be discovered, and also one of the first (non-nova) variable stars to be discovered."
    }
  ];

  //default val of orderProp
  $scope.orderProp = 'distance';
});
