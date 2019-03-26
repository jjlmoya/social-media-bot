const puppeteer = require('puppeteer');
let MuchoViaje = require('./services/muchoviajeService');


(function () {
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        //await browser.close();
    })();
})();