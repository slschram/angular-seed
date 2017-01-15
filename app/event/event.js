'use strict';

angular.module('myApp.event', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/event', {
    templateUrl: 'event/event.html',
    controller: 'eventCtrl'
  });
}])

.controller('EventCtrl', [function() {

}]);

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
