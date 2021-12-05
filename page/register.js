const { test, expect } = require('@playwright/test');

exports.SignInPage = class SignInPage {
    constructor(page) {
        this.page = page;
        this.form = page.locator('#signInModal');
        this.signInInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signInButton = this.form.locator('.btn.btn-primary');
    }

    async typeNewLogin(newlogin) {
        await this.signInInput.fill(newlogin);
    }

    async typeNewPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickSignUp() {
        await this.signInButton.click();
    }
}
