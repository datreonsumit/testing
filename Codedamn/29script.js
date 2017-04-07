var appX = angular.module('mainApp', []);

appX.controller('app', function($scope){
	$scope.searchEnter = function(){
		// console.log(event.which || event.keyCode);
		if(event.which == 13){
			$scope.addTask();
		}
		
	};
	$scope.addTask = function(){

	};
});
