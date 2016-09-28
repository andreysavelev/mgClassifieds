var angular = require('angular');
var ClassifiedController = require('./app/controllers/classified.controller');
var materialConfig = require('./app/config/ng.config');
var classifiedFactory = require('./app/factories/classifieds.factory');

require('angular-material');
require('angular-material/angular-material.css');
require('mdi/css/materialdesignicons.min.css');
require('./index.css');

const CLASSIFIED = 'classified';

angular
  .module(CLASSIFIED, ['ngMaterial'])
  .config(materialConfig)
  .factory('classifiedFactory', classifiedFactory)
  .controller('ClassifiedController', ClassifiedController);

module.exports = CLASSIFIED;
