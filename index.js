var sportsApp = angular.module("sportsApp", [])

sportsApp.controller("HeaderController", ["$scope", "getData", function($scope, getData){

	getData("http://tiy-espn-info.herokuapp.com/espn/topics", function(data){

		$scope.data = data

		console.log($scope)

	});

}]);

sportsApp.factory("getData", [ "$http", function($http){

	return function(url, callback) {

		$http.get(url).success(callback).error(callback)

	};

}]);