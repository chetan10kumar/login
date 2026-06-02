/*Use Case of making three different class files is that we can refer all these page classes to multiple test*/
/*These page classes can be reffered in multiple test*/
/*In pom the page class has all the element in constructor and have all the corresponding action functions*/

 export class LoginPage
{

    constructor(page)
    {
        this.page=page;
        this.loginnn='//*[@id="login2"]';
        this.username='//*[@id="loginusername"]';
        this.password='//*[@id="loginpassword"]';
        this.loginSubmit='//*[@onclick="logIn()"]';

    }
    async gottoLoginPage()
    {
        await this.page.goto('https://demoblaze.com/index.html');

    }
    async login(username,password)
    {
        await this.page.locator(this.loginnn).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.username).fill(username);
          await this.page.waitForTimeout(2000);
        await this.page.locator(this.password).fill(password);
          await this.page.waitForTimeout(2000);
        await this.page.locator(this.loginSubmit).click();
    }


}