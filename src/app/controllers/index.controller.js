function IndexController ($state) {
	var vm = this;

	function onIndexButton(linkPath) {
		linkPath ? $state.go(linkPath): document.location.replace('https://github.com/andreysavelev/ngClassifieds');
	}

	vm.title = 'ngClassifieds'

	vm.indexItems = [
		{
			title: 'Application',
			description: 'View this application in action!',
			linkTitle: 'Try IT!',
			linkPath: 'classifieds'
		},
		{
			title: 'Sources',
			description: 'View this soruces on GitHub',
			linkTitle: 'GitHub',
			linkPath: ''	
		}
	];

	vm.onIndexButton = onIndexButton;
}

module.exports = IndexController;