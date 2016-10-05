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
		.state('classifieds.new', {
			url: '/new',
			template: require('../templates/classifieds.new.tpl.html'),
			controller: 'NewClassifiedsController as vm'
		})
		.state('classifieds.edit', {
			url: '/edit/:id',
			template: require('../templates/classifieds.edit.tpl.html'),
			controller: 'EditClassifiedsController as vm',
			params: {
				classified: null
			}
		})
}

module.exports = materialConfig;