function NewClassifiedsCtrl($mdSidenav, $timeout, $mdToast, classifiedFactory) {
	var vm = this;

	$timeout(function () {
		$mdSidenav('leftSidenav').open();
	});
};

module.exports = NewClassifiedsCtrl;