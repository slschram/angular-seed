'use strict';

angular.module('myApp.out', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/out', {
    templateUrl: 'out/out.html',
    controller: 'OutCtrl'
  });
}])

.controller('OutCtrl', [function() {

}]);
