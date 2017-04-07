var app= angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'You are inside the home page'
	})
	.when('/a',{
		templateUrl: 'page.html'
	})
	.when('/b',{
		templateUrl:'hello.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});

// var app = angular.module('mainApp', ['ngRoute']);

// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/', {
// 		template:'page.html'
// 	})
// 	.when('/helloUser',{
// 		template:'hello.html'
// 	})
// 	.otherwise({
// 		redirectTo: '/'
// 	});
// });

