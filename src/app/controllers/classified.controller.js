var _ = require('lodash');

function ClassifiedController($scope, $state, $http, $mdSidenav, $mdToast, classifiedFactory) {
	var vm = this;

	var oFakeContact = {
		name: "Andrey Savelev",
		phone: "(555) 555-55-55",
		email: "savelevcorr@gmail.com"
	};


	// Helper functions
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

	// Main Logic
	function openSidenav() {
		$state.go('classifieds.new');	
	}

	function closeSidenav() {
		$mdSidenav('leftSidenav').close();
	}

	function saveClassified(classifiedItem) {
		if (classifiedItem) {
			classifiedItem.contact = oFakeContact;
			vm.classifieds.push(classifiedItem);
			// Clear form fields
			vm.classified = {};
			showToastMessage('Classified ' + classifiedItem.title + ' saved!');
		}
	}

	function editClassified(classified) {
		vm.edititng = true;
		vm.classified = classified;
		
		openSidenav();
	}

	function saveEditedClassified() {
		vm.edititng = false;
		// Clear form fields
		vm.classified = {};
		closeSidenav();

		showToastMessage('Edited classified saved');
	}

	function deleteClassified(classified) {
		var nIndex = vm.classifieds.indexOf(classified);
		vm.classifieds.splice(nIndex, 1);
	}

	function toggleFilters() {
		vm.showFilters = !vm.showFilters;
	}

	function clearFilters() {
		vm.classifiedsFilter = '';
		vm.category = '';
	}

	classifiedFactory
		.getClassifieds()
		.then(function (responce) {
			vm.classifieds = responce.data;
			vm.categories = getCategories(vm.classifieds);
		})
		.catch(function (error) {
			console.error(error.message);
		});

	$scope.$on('newClassified', (event, data) => {
		saveClassified(data);
	})


	// Public API

	// Methods
	vm.openSidenav = openSidenav;
	vm.closeSidenav = closeSidenav;
	vm.saveClassified = saveClassified;
	vm.editClassified = editClassified;
	vm.saveEditedClassified = saveEditedClassified;
	vm.deleteClassified = deleteClassified;
	vm.toggleFilters = toggleFilters;
	vm.clearFilters = clearFilters;

	// Properties
	vm.showFilters = false;
}

module.exports = ClassifiedController;
