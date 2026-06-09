# OrangeHRM Authentication Module Test Plan

**Application:** OrangeHRM Live Demo
**URL:** https://opensource-demo.orangehrmlive.com/
**Module:** Authentication (Login, Registration/User Creation, Forgot Password)


---

## 1. Objective

The objective of this test plan is to verify that the Authentication module of OrangeHRM functions correctly, securely, and consistently across normal, negative, and boundary conditions.

### Scope Covers:

* Login
* User Registration (Admin creates user account)
* Forgot Password

---

## 2. Scope

### In Scope

### Login

* Valid login
* Invalid login
* Empty fields validation
* Password masking
* Logout

### Registration (Admin User Creation)

* Create new employee
* Create login credentials
* Mandatory field validation
* Duplicate username validation

### Forgot Password

* Reset using username
* Reset using email
* Invalid username handling


---

## 3. Out of Scope

* Payroll module
* Leave Management
* Recruitment workflow
* Employee Profile Management
* Performance module
* API testing
* Mobile application

---


### Demo Credentials

* **Username:** Admin
* **Password:** admin123

---

## 4. Entry Criteria

* Application is deployed
* Test environment is accessible
* Test data is available
* Browser compatibility verified

---

## 5. Functional Test Cases

| TC ID  | Module          | Test Scenario                            | Test Steps                                        | Expected Result                                 |
| ------ | --------------- | ---------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| TC_001 | Login           | Verify login with valid credentials      | Enter valid username and password and click Login | User successfully logs in and dashboard appears |
| TC_002 | Login           | Verify login with invalid password       | Enter valid username and wrong password           | Error message "Invalid credentials" displayed   |
| TC_003 | Login           | Verify login with invalid username       | Enter invalid username and valid password         | Login fails                                     |
| TC_004 | Login           | Verify login with both fields empty      | Leave username and password blank and click Login | Required field validation appears               |
| TC_005 | Login           | Verify password masking                  | Type password                                     | Password characters are hidden                  |
| TC_006 | Login           | Verify logout functionality              | Login and click Logout                            | User returns to login page                      |
| TC_007 | Forgot Password | Verify reset with valid username         | Click Forgot Password and enter valid username    | Password reset request accepted                 |
| TC_008 | Forgot Password | Verify reset with invalid username       | Enter unknown username                            | Appropriate validation/error message appears    |
| TC_009 | Registration    | Verify new user creation with valid data | Admin creates employee and login account          | User account created successfully               |
| TC_010 | Registration    | Verify duplicate username validation     | Create another user with existing username        | System prevents duplicate username              |

---

## 6. Edge Test Cases

| TC ID    | Scenario                             | Expected Result                      |
| -------- | ------------------------------------ | ------------------------------------ |
| EDGE_001 | Username with leading spaces         | Spaces trimmed or validation shown   |
| EDGE_002 | Password with trailing spaces        | Login behavior follows specification |
| EDGE_003 | Username exceeding maximum length    | Validation message displayed         |
| EDGE_004 | Special characters in username field | Invalid characters rejected          |
| EDGE_005 | Forgot password with empty field     | Mandatory validation displayed       |

---

## 7. Risks

| Risk                                          | Impact                             | Mitigation                   |
| --------------------------------------------- | ---------------------------------- | ---------------------------- |
| Demo server downtime                          | Test execution blocked             | Retry later                  |
| Shared public demo data changes               | Test failures                      | Use fresh test data          |
| Email reset functionality unavailable on demo | Forgot Password validation limited | Validate UI flow only        |
| Browser cache/session issues                  | False-positive defects             | Clear cache before execution |
| Concurrent users modifying data               | Inconsistent results               | Execute in isolated sessions |

---

## 8. Assumptions

* Admin account remains active
* Demo environment is publicly accessible
* Forgot Password feature is enabled
* User creation permissions are available

---

## 9. References

* OrangeHRM Demo Login Page
* OrangeHRM User Documentation

---

# Summary

### Total Functional Test Cases

**10**

### Total Edge Test Cases

**5**

### Modules Covered

* Login
* Registration (Admin User Creation)
* Forgot Password
* Authentication Security

### Testing Types

* Functional Testing
* Negative Testing
* Boundary Testing

