const selenium = require('selenium-webdriver');
var capabilities = require('./settings');

module.exports = new selenium.Builder()
    .withCapabilities(capabilities)
    .build();