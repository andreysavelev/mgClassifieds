function EditClassifiedsCtrl($scope, $state, $mdSidenav, $timeout, $mdToast, classifiedFactory) {
	var vm = this;

	const FIREBASE = classifiedFactory.base;

	classifiedFactory.auth()
		.signInWithEmailAndPassword('tuyesize@cartelera.org', 's9020666')
		.then(user => {
			vm.classifieds = FIREBASE;
			vm.classified = vm.classifieds.$getRecord($state.params.id);
		})
		.catch(error => {
			console.log(error);
		});

	function closeSidenav () {
		vm.sidenavIsOpen = false;
	}

	function saveClassified(classified) {
		vm.classifieds.$save(vm.classified)
			.then(() => {
				$scope.$emit('editClassified', 'Edit Saved!');
				vm.sidenavIsOpen = false;
			})
			.catch(error => {
				console.log("Error", error);
			});
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

module.exports = EditClassifiedsCtrl;