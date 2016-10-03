function ClassifiedController($scope, $http, $mdSidenav, $mdToast, classifiedFactory) {
	var oFakeContact = {
		name: "Andrey Savelev",
		phone: "(555) 555-55-55",
		email: "savelevcorr@gmail.com"
	};

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

	// Add new classified item
	$scope.saveClassified = function (classifiedItem) {
		if (classifiedItem) {
			classifiedItem.contact = oFakeContact;
			$scope.classifieds.push(classifiedItem);

			$mdToast.show(
				$mdToast.simple()
					.content('Classified ' + classifiedItem.title + ' saved!')
					.position('top, right')
					.hideDelay(3000)
			);

			// Clear form fields
			$scope.classified = {};
		}

		$scope.toggleSidenav();
	};

	// Edit existing classified item
	$scope.editClassified = function (a, b, c) {
		console.log("a", a);
		console.log("b", b);
		console.log("c", c);
	}
}

module.exports = ClassifiedController;
