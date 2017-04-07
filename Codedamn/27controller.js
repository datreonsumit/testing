var application = angular.module('mainApp', []);

application.service('fromService', function(){
	this.message = "This is from Service";
});

application.factory('fromFactory', function(){
	var factory= {};
	factory.message = "This is from factory!";
	return factory;
});

application.provider('fromProvider', function(){
	var m1 = "This is from provider!";
	return{
		$get: function(){
			return{
				message: m1
			}
		};
	}
});

application.controller('app',function(fromService,fromFactory,fromProvider){
$scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message];
});