var app = angular.module("myShoppingList",[]);
app.controller("myCtrl", function($scope){
	$scope.products = ["Milk", "Bread", "Cheese"];
	$scope.addItem = function(){
		$scope.errortext = "";
		if(!$scope.addMe){ return;}
		if($scope.products.indexOf($scope.addMe) == -1){
		$scope.products.push($scope.addMe);
	}	
	else{
		$scope.errortext = "The Item is already in your Shopping List.";
	}
	}
	$scope.removeItem = function(x){
		$scope.errortext = "";
		$scope.products.splice(x, 1);
	}
});