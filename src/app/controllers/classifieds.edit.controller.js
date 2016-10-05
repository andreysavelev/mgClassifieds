function EditClassifiedsCtrl($scope, $state, $mdSidenav, $timeout, $mdToast, classifiedFactory) {
	var vm = this;

	function closeSidenav () {
		vm.sidenavIsOpen = false;
	}

	function saveClassified(classified) {
		$scope.$emit('editClassified', 'Edit Saved!');
		vm.sidenavIsOpen = false;
	}

	$timeout(() => {
		$mdSidenav('leftSidenav').open();
	});

	$scope.$watch('vm.sidenavIsOpen', (sidenav) => {
		if (sidenav === false) {
			$mdSidenav('leftSidenav')
				.close()
				.then(() => {
					$state.go('classifieds');
				})
		}
	});

	// Public API
	vm.closeSidenav = closeSidenav;
	vm.saveClassified = saveClassified;
	vm.classified = $state.params.classified;
};

module.exports = EditClassifiedsCtrl;