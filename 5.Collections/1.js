angular.module('mainModule', [])
	.controller('mainController', function($scope) {
		// Initialization
		$scope.areAllPeopleSelected = false;
		$scope.people = [{
			firstName: "John",
			lastName: "Doe"
		}, {
			firstName: "Bob",
			lastName: "Smith"
		}, {
			firstName: "Jack",
			lastName: "White"
		}, {
			firstName: "Michael",
			lastName: "Green"
		}, {
			firstName: "Taro",
			lastName: "Yamada"
		}];

		$scope.selectablePeople = [{
			firstName: "John",
			lastName: "Doe",
			isSelected: true
		}, {
			firstName: "Bob",
			lastName: "Smith",
			isSelected: false
		}, {
			firstName: "Jack",
			lastName: "White",
			isSelected: false
		}, {
			firstName: "Michael",
			lastName: "Green",
			isSelected: false
		}];

		$scope.updatePeopleSelection = function(peopleArray, selectionValue) {
			var len = peopleArray.length;
			for (var i = 0; i < len; i++) {
				peopleArray[i].isSelected = selectionValue;
			}
		};

		$scope.getPersonPositionDesc = function(isFirst, isMiddle, isLast, isEven, isOdd) {
			var result = "";
			if (isFirst) {
				result = "(first";
			} else if (isMiddle) {
				result = "(middle";
			} else if (isLast) {
				result = "(last";
			}

			if (isEven) {
				result += "-even)";
			} else if (isOdd) {
				result += "-odd)";
			}

			return result;
		};

		$scope.stringsArray = [];
		var currStringIndex = 0;
		$scope.addStringToArray = function() {
			$scope.stringsArray.push("Item " + currStringIndex);
			currStringIndex++;
		};
		$scope.removeStringFromArray = function(stringIndex) {
			if (stringIndex >= 0 && stringIndex < $scope.stringsArray.length) {
				$scope.stringsArray.splice(stringIndex, 1);
			}
		};
	});