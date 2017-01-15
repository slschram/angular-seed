'use strict';


angular.module('myApp.step2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/step2', {
    templateUrl: 'step2/step2.html',
    controller: 'step2Ctrl'
  });
}])

.controller('Step2Ctrl', [function() {

}]);

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
