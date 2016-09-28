function ClassifiedController($scope, $http, classifiedFactory) {

	classifiedFactory
		.getClassifieds()
		.then(function (responce) {
			$scope.classifieds = responce.data;
		})
		.catch(function (error) {
			console.error(error.message);
		});
}

module.exports = ClassifiedController;
