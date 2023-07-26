

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@name = 'username']");
    }

    get inputPassword () {
        return $("//input[@type = 'password']");
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get invalidError(){
        return $("//p[text()='Invalid credentials']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        console.log("Accessed the username")
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
