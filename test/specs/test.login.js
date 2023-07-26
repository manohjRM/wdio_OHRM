/**
 * test with page objects
 */
const LoginPage = require('../pageobjects/login.page')
const DashboardPage = require('../pageobjects/dashboard.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')
        await expect(DashboardPage.dashboardtext).toBeExisting();
        await DashboardPage.lout()
        await expect(LoginPage.inputUsername).toBeExisting();
    })

    it('should not login with invalid credentials', async ()=>{
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin')
        console.log("Invalid Login")
        await expect(LoginPage.invalidError).toBeExisting();
    })

    it('should login with valid credentials after error', async () => {
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')
        await expect(DashboardPage.dashboardtext).toBeExisting();
        await DashboardPage.lout()
        await expect(LoginPage.inputUsername).toBeExisting();
    })
})

