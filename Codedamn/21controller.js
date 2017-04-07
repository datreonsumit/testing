var app = angular.module('mainApp',[]);

app.controller('app', function($scope){
	$scope.counter = 0;
	$scope.$watch('myText',function(newValue, oldValue){
		$scope.counter++;
		if($scope.counter>150){
			alert("hey you hits 150 times");
			
		}
	})
})