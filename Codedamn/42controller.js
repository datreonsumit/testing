var app = angular.module('mainApp', []);

app.directive('myFirstScript', function(){
	return {
		restrict: 'EA',
		scope:{
			name: '@'
		},
		template:'<p> Value of name in directive: {{name}}</p>',
		'<p> Enter new "name": <input type="text" ng-model="name"></p>'].join('')
	}
});

app.controller('app', function($scope){
	$scope.name = "codedamn";
});


// @ - Text Bind
// = - Two way Bind
// & - one way Bind