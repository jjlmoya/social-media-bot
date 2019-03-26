module.exports = {
    locators: {
        url: 'https://www.instagram.com',
        login: {
            enterScreen: '._0mzm-',
            user: 'input[type="text"]',
            password: 'input[type="password"]',
            button: '#react-root > section > main > article > div > div > div > form > div.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.CovQj.jKUp7.DhRcB > button',
            cookie: '.GAMXX',
        },
        explore: {
            url: function (hashtag) {
                return `https://www.instagram.com/explore/tags/${hashtag}`
            },
            publication: function (index) {
                const x = Math.floor(index / 4) + 1;
                const y = ((index - 1) % 3) + 1;
                return `section > main > article > div:nth-child(3) > div > div:nth-child(${x}) > div:nth-child(${y}) > a > div > div._9AhH0`;
            },
            searchIcon: '_0TPg'
        }
    },


    login: async function (name, password) {
        var login = this.locators.login;
        await this.page.waitForSelector(login.enterScreen);
        await this.page.waitFor(1000);
        await this.page.click(login.enterScreen);

        await this.page.waitForSelector(login.user);
        await this.page.waitFor(1000);
        await this.page.click(login.user);
        await this.page.keyboard.type(name);
        await this.page.click(login.password);
        await this.page.keyboard.type(password);
        await this.page.click(login.button);

        await this.page.waitForSelector(login.cookie);
        await this.page.click(login.cookie);
    },
    exploreHashTag: async function (hashtag) {
        var explore = this.locators.explore;
        await this.page.goto(explore.url(hashtag));
        await this.page.click(explore.publication(9));
        /*
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