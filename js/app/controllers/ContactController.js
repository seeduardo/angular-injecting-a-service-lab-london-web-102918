function ContactController($scope, $timeout) {
	$scope.name = 'Bastardface';

	$timeout(function () {
		$scope.name = 'Total Angelic Wonder of Our Times';}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
