const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test('Login to OrangeHRM', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();


    await login.login(process.env.USERNAME,process.env.PASSWORD);

    await login.verifyLoginSuccess();
});