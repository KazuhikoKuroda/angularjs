var firstController = function ($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
};

var secondController = function ($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.middleName = "hoo";
	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
	};
};