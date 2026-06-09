const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;
    }

    async clickAdminMenu() {
        await this.page.locator('a[href*="/admin/viewAdminModule"]').click();
    }

    async clickPimMenu() {
        await this.page.locator('a[href*="/pim/viewPimModule"]').click();
    }

    async verifyUrlContains(text) {
        await expect(this.page).toHaveURL(new RegExp(text, 'i'));
    }

    async logout() {

        await this.page.locator('.oxd-userdropdown-tab').click();

        await this.page.getByText('Logout').click();
    }
}

module.exports = DashboardPage;