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

function outputUpdate(vol, int) {
	document.querySelector('#volume').value = vol;
  if (vol == "1"){
    document.querySelector('#intensity').value = "Not Elevated";
  }
  if (vol == "2"){
    document.querySelector('#intensity').value = "Slightly Elevated";
  }
  if (vol == "3"){
    document.querySelector('#intensity').value = "Moderately Elevated";
  }
  if (vol == "4"){
    document.querySelector('#intensity').value = "Out of Control";
  }
  if (vol == "5"){
    document.querySelector('#intensity').value = "I Need Help Now";
  }
}

$('.emoticon').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('myClickState');
});
