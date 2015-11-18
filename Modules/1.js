var hoge = function($scope) {
	$scope.person = {
		firstName: "kazuhiko",
		lastName: "kuroda",
		getFullName: function() {
			return $scope.person.firstName + " " + $scope.person.lastName;
		}
	};
};
angular.module("mainModule", []).controller("simpleController", hoge);
