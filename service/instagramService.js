module.exports = {
    locators: {
        url: 'https://www.instagram.com',
        login: {
            enterScreen: '_0mzm-',
            user: 'username',
            password: 'password'
        }
    },
    login: function (name, password) {
        const driver = this.driver,
            selenium = this.selenium,
            loginForm = this.locators.login;
        driver.get(this.locators.url);
        driver.findElement(selenium.By.className(loginForm.enterScreen)).click();
        driver.findElement(selenium.By.name(loginForm.user)).sendKeys(name);
        var passwordField = driver.findElement(selenium.By.name(loginForm.password));
        passwordField.sendKeys(password);
        passwordField.submit();
        driver.wait(selenium.until.elementLocated(selenium.By.className('GAMXX')), 5 * 1000).then(function (el) {
            return el.click();
        });
    },
    exploreHashTag: function (hashtag) {
        /**
         ¿Estoy logueado? Logueate
         Pagina inicio? IR
         Click en la Lupa
         Click en Input Buscar
         Escribir hashtag (añadir almohadilla)
         Pulsar sobre los X primeros
             Al pulsar hacer:
                IR RECIENTES
                Las Y primeras publicaciones
                        Pulsar publicación
                        (Like al Post)
                        IR a me gusta
                        Seguir a todos
                        Volver Atrás (Publicaciones modo lista)
                Volver Atrás (Publicaciones)
            Volver atrás (Lista de hashtags)
         Volver atrás (Página inicio)
         * **/
    },

};