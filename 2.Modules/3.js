// Definition of a PersonManager object
var PersonManager = function(person) {
	this.personInstance = person;
	// this.getPersonFirstName = function() {
	// 	return this.personInstance.firstName;
	// };
	// this.getPersonLastName = function() {
	// 	return this.personInstance.lastName;
	// };
	// this.getPersonFullName = function(separator) {
	// 	return this.personInstance.firstName + separator + this.personInstance.lastName;
	// };
};
PersonManager.prototype.getPersonFirstName = function() {
	return this.personInstance.firstName;
};
PersonManager.prototype.getPersonLastName = function() {
	return this.personInstance.lastName;
};
PersonManager.prototype.getPersonFullName = function(separator) {
	return this.personInstance.firstName + separator + this.personInstance.lastName;
};

angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: ""
	})
	.service("personManager", PersonManager)
	.controller("mainController", function($scope, person, personManager) {
		person.firstName = "John";
		person.lastName = "Due";
		$scope.personManagerInstance = personManager;
	});
