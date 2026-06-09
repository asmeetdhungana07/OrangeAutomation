
//NEGATIVE SCENARIOS
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Negative Login Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
    });

    test('Invalid username and password', async ({ page }) => {

        const login = new LoginPage(page);

        await login.login('WrongUser', 'WrongPassword');

        await expect(
            page.locator('.oxd-alert-content-text')
          ).toContainText('Invalid');
    });

    test('Empty username', async ({ page }) => {

        const login = new LoginPage(page);

        await login.login('', 'admin123');

        await expect(
            page.getByText('Required')
        ).toBeVisible();
    });

    test('Empty password', async ({ page }) => {

        const login = new LoginPage(page);

        await login.login('Admin', '');

        await expect(
            page.getByText('Required')
        ).toBeVisible();
    });

});