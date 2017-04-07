var appX = angular.module('mainApp', []);

appX.controller('app', function($scope){
	$scope.tasks = [];
	$scope.searchEnter = function() {
		if(event.which == 13){
			$scope.addTask();
		}
	};
	$scope.addTask = function(){
		$scope.tasks.push($scope.task);
		console.log($scope.tasks);
	}
	
	});