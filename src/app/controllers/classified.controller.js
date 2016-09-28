function ClassifiedController($scope, $http, $mdSidenav, classifiedFactory) {

	classifiedFactory
		.getClassifieds()
		.then(function (responce) {
			$scope.classifieds = responce.data;
		})
		.catch(function (error) {
			console.error(error.message);
		});

	$scope.toggleSidenav = function () {
		$mdSidenav('leftSidenav').toggle();
	};
}

module.exports = ClassifiedController;
