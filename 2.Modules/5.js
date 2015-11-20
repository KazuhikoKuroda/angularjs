// Definition of a PersonManager object
var PersonManager = function() {
	return {
		$get: function(person) {
			return {
				getPersonFirstName: function() {
					return person.firstName;
				},
				getPersonLastName: function() {
					return person.lastName;
				},
				getPersonFullName: function(separator) {
					return person.firstName + separator + person.lastName;
				}
			};
		}
	};
};

angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: ""
	})
	.provider("personManager", PersonManager)
	.controller("mainController", function($scope, person, personManager) {
		person.firstName = "John";
		person.lastName = "Due";
		$scope.personInstance = person;
		$scope.personManagerInstance = personManager;
	});

