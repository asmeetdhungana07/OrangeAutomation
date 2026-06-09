const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test('Logout from OrangeHRM', async ({ page }) => {

    const login = new LoginPage(page);

    const dashboard = new DashboardPage(page);

    await login.goto();

    await login.login('Admin', 'admin123');

    await dashboard.logout();

    await expect(page).toHaveURL(/login/);
});