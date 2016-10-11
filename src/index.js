var angular = require('angular');
var materialConfig = require('./app/config/ng.config');
var classifiedFactory = require('./app/factories/classifieds.factory');

var IndexController = require('./app/controllers/index.controller');
var ClassifiedController = require('./app/controllers/classified.controller');
var NewClassifiedsController = require('./app/controllers/classifieds.new.controller');
var EditClassifiedsController = require('./app/controllers/classifieds.edit.controller');

require('angular-material');
require('angular-ui-router');
require('firebase');
require('angularfire');
require('angular-material/angular-material.css');
require('mdi/css/materialdesignicons.min.css');
require('./index.css');

const CLASSIFIED = 'classified';

angular
  .module(CLASSIFIED, ['ngMaterial', 'ui.router', 'firebase'])
  .config(materialConfig)
  .factory('classifiedFactory', classifiedFactory)
  .controller('IndexController', IndexController)
  .controller('ClassifiedController', ClassifiedController)
  .controller('NewClassifiedsController', NewClassifiedsController)
  .controller('EditClassifiedsController', EditClassifiedsController);

module.exports = CLASSIFIED;
