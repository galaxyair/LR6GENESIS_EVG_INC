const { test, expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.form = page.locator('#logInModal');
        this.loginInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = this.form.locator('.btn.btn-primary');
    }

    async typeLogin(login) {
        await this.loginInput.fill(login);
    }

    async typePassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}
