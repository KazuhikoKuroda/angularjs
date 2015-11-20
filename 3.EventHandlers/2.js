angular.module('mainModule', [])
	.controller('mainController', function($scope) {
		$scope.onKeyDownResult = '';
		$scope.onKeyUpResult = '';
		$scope.onKeyPressResult = '';

		var getKeyboardEventResult = function (keyEvent, keyEventDesc)
		{
			return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
		};

		$scope.onKeyDown = function(value) {
			$scope.onKeyDownResult = getKeyboardEventResult(value, 'KeyDown');
		};
		$scope.onKeyUp = function(value) {
			$scope.onKeyUpResult = getKeyboardEventResult(value,'KeyUp');
		}
		$scope.onKeyPress = function(value) {
			$scope.onKeyPressResult = getKeyboardEventResult(value, 'KeyPress');
		}
	});
