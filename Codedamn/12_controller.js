var app= angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'You are inside the home page'
	})
	.when('/anotherPage',{
		templateUrl : 'page.html'
	})
	.when('/a',{
		template:'I love to Become Big Data Solutions Architect'
	})
	.otherwise({
		redirectTo: '/'
	});

});