var app = angular.module('mainApp', []);

app.directive('myFirstScript', function(){
	function linkFunction($scope, elem, attrs){
		$scope.name = "Hello World";
		$scope.changeName= function(newName){
			$scope.name = $scope.controllerProperty;
		}
	}
	return {
		restrict: 'EA',
		scope: true,
		link: linkFunction,
		template: '<span ng-click="changeName('{{controllerProperty}}\)">Current text: {{name}}</span>'
	}
});

app.controller('app', function($scope){
	$scope.controllerProperty = "This is controller specific Property.";
});