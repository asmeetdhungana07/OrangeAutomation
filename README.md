# OrangeHRM Playwright Automation Framework

## Overview

This project automates key OrangeHRM UI workflows using Playwright and JavaScript following the Page Object Model (POM) design pattern.

### Automated Test Scenarios

1. Valid Login
2. Invalid Login (3 Negative Scenarios)
3. Employee Search
4. Add Employee
5. Logout

## Tech Stack

* Playwright
* JavaScript
* Node.js

## Framework Design

* Page Object Model (POM)
* Reusable page classes
* Independent test scripts

## Installation

Clone repository:

```bash
git clone https://github.com/asmeetdhungana07/OrangeAutomation.git
cd orangehrm-playwright
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/invalidLogin.spec.js
```

## Generate HTML Report

```bash
npx playwright show-report
```

## Author

Asmeet Dhungana


## Screenshot of report

Screenshot 2026-06-09 at 21.04.21

