function materialConfig($mdThemingProvider) {
	$mdThemingProvider.theme('default')
					.primaryPalette('teal')
					.accentPalette('orange');
}

module.exports = materialConfig;