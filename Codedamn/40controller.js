var app = angular.module('mainApp', []);

app.directive('myFirstScript', function(){
	function linkFunction($scope, elem, attrs){
		$scope.name = "Hello World";
		$scope.changeName= function(newName){
			$scope.name = newName;
		}
	}
	return {
		restrict: 'EA',
		link: linkFunction,
		template: '<span ng-click="changeName(\'hey There\')">Current text: {{name}}</span>'
	}
// function linkFunction(scope, elem, attrs){
// 	elem.bind('click', function(){
// 		console.log(elem[0].innerHTML);
// 	});
// }

	// return {
	// 	template: 'Hello World',
	// 	restrict: 'EA',
	// 	link: linkFunction
 //    };
});

app.controller('app', function(){

});