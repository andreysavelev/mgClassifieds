const FIREBASE = require('firebase');
const FIREBASE_CONFIG = require('../config/firebase.config');


function classifiedsFactory($http, $firebaseArray) {
	var oBase = FIREBASE
				.initializeApp(FIREBASE_CONFIG);
	var database = oBase.database();
	var auth = oBase.auth;	
	return {
		base: $firebaseArray(database.ref()),
		auth: auth
	}
}

module.exports = classifiedsFactory;