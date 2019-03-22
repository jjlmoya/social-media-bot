const Driver = require('./configuration/driver');
const Selenium = require('selenium-webdriver');
const Load = require('./configuration/loadModule');
const Credentials = require('./configuration/credentials');
const Instagram = Load('../service/instagramService', {
    driver: Driver,
    selenium: Selenium
});
(function () {
    var init = function () {
        Instagram.login(Credentials.instagram.name, Credentials.instagram.password);
    };
    init();
})();

Driver.close();