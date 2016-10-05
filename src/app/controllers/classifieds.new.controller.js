function NewClassifiedsCtrl($scope, $state, $mdSidenav, $timeout, $mdToast, classifiedFactory) {
	var vm = this;

	function closeSidenav () {
		vm.sidenavIsOpen = false;
	}

	function saveClassified(classified) {
		$scope.$emit('newClassified', classified);
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
};

module.exports = NewClassifiedsCtrl;