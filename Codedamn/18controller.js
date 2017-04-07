var fileX = {
	"records": [
		{
			"Name":"Sumit",
			"Age":"23",
			"Fav_color": "orange"
		},
		{
			"Name":"Mukul",
			"Age":"75",
			"Fav_color": "black"
		},
		{
			"Name":"Gunnaewe",
			"Age":"65",
			"Fav_color": "Pink"
		},
		{
			"Name":"dilip",
			"Age":" ???? ",
			"Fav_color": "Blue"
		},
	]
}

var app = angular.module('mainApp', []);

app.controller('people', function($scope){
	$scope.persons = fileX.records;
})