var _ = require('lodash');

function ClassifiedController($scope, $state, $http, $mdSidenav, $mdToast, classifiedFactory) {
	var vm = this;

	var oFakeContact = {
		name: "Andrey Savelev",
		phone: "(555) 555-55-55",
		email: "savelevcorr@gmail.com"
	};

	const FIREBASE = classifiedFactory.base;
	
	classifiedFactory.auth()
		.signInWithEmailAndPassword('tuyesize@cartelera.org', 's9020666')
		.then(user => {
			vm.classifieds = FIREBASE;
			vm.classifieds.$loaded(classifieds => {
				vm.categories = getCategories(classifieds);
			});
		})
		.catch(error => {
			console.log(error);
		});

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
			if (classified.categories) {
				classified.categories.forEach(category => {
					categories.push(category);
				});
			}
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

			vm.classifieds.$add(classifiedItem);
			
			// Clear form fields
			vm.classified = {};
			showToastMessage('Classified ' + classifiedItem.title + ' saved!');
		}
	}

	function editClassified(classified) {
		$state.go('classifieds.edit', {
			id: classified.$id
		});
	}

	function saveEditedClassified() {
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

	$scope.$on('newClassified', (event, data) => {
		saveClassified(data);
	});

	$scope.$on('editClassified', (event, message) => {
		showToastMessage(message);
	});


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
