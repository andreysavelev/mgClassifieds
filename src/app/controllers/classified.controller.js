var _ = require('lodash');

function ClassifiedController($scope, $http, $mdSidenav, $mdToast, classifiedFactory) {
	function showToastMessage (sMessage) {
		$mdToast.show(
			$mdToast.simple()
				.content(sMessage)
				.position('top, right')
				.hideDelay(3000)
		);
	}

	function getCategories(classifieds) {
		var categories = [];

		classifieds.forEach(function (classified) {
			classified.categories.forEach(function (category) {
				categories.push(category);
			});
		});

		return _.uniq(categories);
	}

	var oFakeContact = {
		name: "Andrey Savelev",
		phone: "(555) 555-55-55",
		email: "savelevcorr@gmail.com"
	};

	classifiedFactory
		.getClassifieds()
		.then(function (responce) {
			$scope.classifieds = responce.data;
			$scope.categories = getCategories($scope.classifieds);
		})
		.catch(function (error) {
			console.error(error.message);
		});

	$scope.showFilters = false;

	$scope.toggleSidenav = function () {
		$mdSidenav('leftSidenav').toggle();
	};

	$scope.openSidenav = function () {
		$mdSidenav('leftSidenav').open();	
	};

	$scope.closeSidenav = function () {
		$mdSidenav('leftSidenav').close();
	};

	// Add new classified item
	$scope.saveClassified = function (classifiedItem) {
		if (classifiedItem) {
			classifiedItem.contact = oFakeContact;
			$scope.classifieds.push(classifiedItem);
			// Clear form fields
			$scope.classified = {};
			$scope.toggleSidenav();
			showToastMessage('Classified ' + classifiedItem.title + ' saved!');
		}

	};

	// Edit existing classified item
	$scope.editClassified = function (classified) {
		$scope.edititng = true;
		$scope.classified = classified;
		
		$scope.openSidenav();
	};

	// Save edited classified item
	$scope.saveEditedClassified = function () {
		$scope.edititng = false;
		// Clear form fields
		$scope.classified = {};
		$scope.closeSidenav();

		showToastMessage('Edited classified saved');
	};

	// Delete classified item
	$scope.deleteClassified = function (classified) {
		var nIndex = $scope.classifieds.indexOf(classified);
		$scope.classifieds.splice(nIndex, 1);
	};

	// Show/Hide Filters 
	$scope.toggleFilters = function () {
		$scope.showFilters = !$scope.showFilters;
	};

	// Clear all filters
	$scope.clearFilters = function () {
		$scope.classifiedsFilter = '';
		$scope.category = '';
	};
}

module.exports = ClassifiedController;
