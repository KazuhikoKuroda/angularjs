var BaseProvider = function() {
	var providerID;
	return {
		setID: function(id) {
			providerID = id;
		},
		$get: function() {
			return {
				getProviderID: function() {
					return providerID;
				}
			};
		}
	};
};

angular.module('childModule1', [])
	.provider('provider1', BaseProvider)
	.config(function(provider1Provider) {
		provider1Provider.setID('childModule1 - provider1');
	})
	.provider('provider2', BaseProvider)
	.config(function(provider2Provider) {
		provider2Provider.setID('childModule1 - provider2');
	});

angular.module('childModule2', ['childModule3'])
	.provider('provider1', BaseProvider)
	.config(function(provider1Provider) {
		provider1Provider.setID('childModule2 - provider1');
	})
	.provider('provider3', BaseProvider)
	.config(function(provider3Provider) {
		provider3Provider.setID('childModule2 - provider3');
	});

angular.module('childModule3', [])
	.provider('provider1', BaseProvider)
	.config(function(provider1Provider) {
		provider1Provider.setID('childModule3 - provider1');
	})
	.provider('provider4', BaseProvider)
	.config(function(provider4Provider) {
		provider4Provider.setID('childModule3 - provider4');
	});

angular.module('mainModule', ['childModule1', 'childModule2'])
	.controller('mainController', function($scope, provider1, provider2, provider3, provider4) {
		$scope.provider1 = provider1;
		$scope.provider2 = provider2;
		$scope.provider3 = provider3;
		$scope.provider4 = provider4;
	});



