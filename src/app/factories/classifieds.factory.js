function classifiedsFactory($http) {
	function getClassifieds() {
		return $http.get('./data/classifieds.json');
	}

	return {
		getClassifieds: getClassifieds
	}	
}

module.exports = classifiedsFactory;