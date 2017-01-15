'use strict';

angular.module('myApp.emotion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/emotion', {
    templateUrl: 'emotion/emotion.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}
