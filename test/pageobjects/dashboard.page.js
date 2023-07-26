

const Page = require("./page")

class DashboardPage extends Page{
    get dashboardtext(){
        return $("//h6[text()='Dashboard']")
    }
    get user(){
        return $('.oxd-userdropdown-tab')
    }
    get logout(){
        return $("//ul[@class='oxd-dropdown-menu']/li[4]")
    }

    async lout(){
        await this.user.click();
        await this.logout.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new DashboardPage();