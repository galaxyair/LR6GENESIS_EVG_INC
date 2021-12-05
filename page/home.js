const { test, expect } = require('@playwright/test');

exports.HomePage = class HomePage{
    constructor(page) {
        this.page=page;
        this.url = 'https://www.demoblaze.com/';
        this.loginButton = page.locator('#login2');
        this.signInButton = page.locator('#signin2');
        this.usernameLabel = page.locator('#nameofuser');
    }

    async open(){
        await this.page.goto(this.url);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    async clickSignIn(){
        await this.signInButton.click();
    }
}
