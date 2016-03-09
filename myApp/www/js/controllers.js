angular.module('app.controllers', [])
  
.controller('loginAccountCtrl', function($scope, $location) {
	$scope.login = function(){
		$location.url('/locationList');
	}
})
   
.controller('signupAccountCtrl', function($scope) {

})
   
.controller('selectYourAreaCtrl', function($scope, $location) {
	$scope.register = function(){
		$location.url('/locationList');
	}
})

.controller('locationListCtrl', function($scope){
	
})

.controller('locationDetailCtrl', function($scope){

})

.controller('settingsCtrl', function($scope){
	
})
 