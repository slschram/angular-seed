'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.emotion',
  'myApp.out',
  'myApp.event',
  'myApp.next',
  'myApp.step2',
  'myApp.step3',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index.html'});
}]);
