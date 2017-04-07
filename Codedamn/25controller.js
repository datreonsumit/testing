var application = angular.module('mainApp', []);

application.provider('date', function(){
return {
	$get: function() {
		return {
			showDate: function() {
				var date = new Date();
				return date.getHours();
			}
		}
	}
}
});

application.controller('app', function($scope, date){
	$scope.greetMessage = date.showDate();
});