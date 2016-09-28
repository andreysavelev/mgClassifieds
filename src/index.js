var angular = require('angular');
var ClassifiedController = require('./app/controllers/classified.controller');
var materialConfig = require('./app/config/ng.config');

require('angular-material');
require('angular-material/angular-material.css');
require('mdi/css/materialdesignicons.min.css');
require('./index.css');

const CLASSIFIED = 'classified';

angular
  .module(CLASSIFIED, ['ngMaterial'])
  .config(materialConfig)
  .controller('ClassifiedController', ClassifiedController);

module.exports = CLASSIFIED;
