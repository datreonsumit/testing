var app = angular.module('mainApp',[]);

app.controller('people', function($scope, $http){
	$http.get("http://localhost:8088/database.json")
	.success(function(response){
		$scope.persons = response.records;
	});

});