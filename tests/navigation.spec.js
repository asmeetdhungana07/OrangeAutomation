const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test('Navigate to Admin Page', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.goto();

    await login.login('Admin', 'admin123');

    await dashboard.clickAdminMenu();

    await dashboard.verifyUrlContains('admin');
});