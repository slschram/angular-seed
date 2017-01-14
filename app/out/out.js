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


// Anoka County 763-755-3801
// Carver/Scott Counties 952-442-7601
// Dakota County 952-891-7171
// Washington County 651-777-5222
// Ramsey County, Adults 651-266-7900
// Ramsey County, Children 651-774-7000
// Hennepin County, Adults 612-596-1223
// Hennepin County, Children 612-348-2233
