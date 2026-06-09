const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = 'input[name="username"]';
        this.password = 'input[name="password"]';
        this.loginBtn = 'button[type="submit"]';
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/dashboard/);
    }
}

module.exports = LoginPage;