// Definition of a PersonManager object
var PersonManager = function() {
	var fullNameSeparator = ' ';

	return {
		setFullNameSeparator: function(separator) {
			fullNameSeparator = separator;
		},
		$get: function(person) {
			return {
				getPersonFirstName: function() {
					return person.firstName;
				},
				getPersonLastName: function() {
					return person.lastName;
				},
				getPersonFullName: function() {
					return person.firstName + fullNameSeparator + person.lastName;
				}
			};
		}
	};
};

angular.module('mainModule', [])
	.value('person', {
		firstName: '',
		lastName: ''
	})
	.provider('personManager', PersonManager)
	.config(function(personManagerProvider) {
		personManagerProvider.setFullNameSeparator("*");
	})
	.run(function(person) {
		person.firstName = 'John';
		person.lastName = 'Due';
	})
	.controller('mainController', function($scope, person, personManager) {
		$scope.personInstance = person;
		$scope.personManagerInstance = personManager;
	});

