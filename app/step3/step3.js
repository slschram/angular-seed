'use strict';

angular.module('myApp.step3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/step3', {
    templateUrl: 'step3/step3.html',
    controller: 'step3Ctrl'
  });
}])

.controller('Step3Ctrl', [function() {

}]);
