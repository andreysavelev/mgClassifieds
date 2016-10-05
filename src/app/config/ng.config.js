function materialConfig($mdThemingProvider, $stateProvider) {
	$mdThemingProvider.theme('default')
					.primaryPalette('teal')
					.accentPalette('orange');

	// Routing
	$stateProvider
		.state('classifieds', {
			url: '/classifieds',
			template: require('../templates/classifieds.tpl.html'),
			controller: 'ClassifiedController as vm'
		})
}

module.exports = materialConfig;