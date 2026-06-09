const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const EmployeePage = require('../pages/EmployeePage');

test('Add Employee', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const employee = new EmployeePage(page);

    await login.goto();

    await login.login('Admin', 'admin123');

    await dashboard.clickPimMenu();

    await employee.clickAddEmployee();

    await employee.addEmployee(
        'Abhishek',
        'Dhungana'
    );

    await employee.verifyEmployeeAdded();
});