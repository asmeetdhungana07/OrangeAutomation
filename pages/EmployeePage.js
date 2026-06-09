const { expect } = require('@playwright/test');

class EmployeePage {

    constructor(page) {

        this.page = page;

        this.addEmployeeBtn = 'text=Add';

        this.firstName = 'input[name="firstName"]';

        this.lastName = 'input[name="lastName"]';

        this.saveBtn = 'button[type="submit"]';
    }

    async clickAddEmployee() {

        await this.page.getByRole('link', {
            name: 'Add Employee'
        }).click();
    }

    async addEmployee(first, last) {

        await this.page.fill(this.firstName, first);

        await this.page.fill(this.lastName, last);

        await this.page.click(this.saveBtn);
    }

    async searchEmployee(name) {

        await this.page.getByRole('textbox', {
            name: 'Type for hints...'
        }).first().fill(name);
    
        await this.page.getByRole('button', {
            name: 'Search'
        }).click();
    }

    async verifyEmployeeAdded() {
        await expect(this.page).toHaveURL(/viewPersonalDetails/);
    
        await expect(
            this.page.getByRole('heading', {
                name: 'Personal Details'
            })
        ).toBeVisible();
    }
}

module.exports = EmployeePage;