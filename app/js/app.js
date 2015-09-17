var starsApp = angular.module('starsApp', [
  'ngRoute',
  'starsControllers'
  // 'starsServices'
]);

starsApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/stars', {
        templateUrl: 'partials/star-list.html',
        controller: 'StarListCtrl'
      }).
      when('/stars/:starId', {
        templateUrl: 'partials/star-detail.html',
        controller: 'StarDetailCtrl'
      }).
      otherwise({
        redirectTo: '/stars'
      });
  }
]);
