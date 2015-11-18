var value = {
	firstName: "",
	lastName: "",
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	}
};
var controller = function($scope, person) {
	person.firstName = "John";
	person.lastName = "Due";
	$scope.personInstance = person;
};

angular.module("mainModule", [])
	.value("p2", {hoge:1})
	.value("person", value)
	.controller("mainController", controller);