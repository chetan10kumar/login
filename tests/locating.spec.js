/*Locating element on the webpage using xpath,css and other attributes*/
/*Locating element and performing some specific action*/
const {test,expect}=require('@playwright/test');
test('Locators',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await page.waitForTimeout(2000);
    const login=await page.locator('//*[@id="login2"]');
    await login.click();
    const username=await page.locator('//*[@id="loginusername"]')
    await username.fill("chetan10");
    await page.waitForTimeout(2000);
    const password=await page.locator('//*[@id="loginpassword"]');
    await password.fill("chetan1004");
    await page.waitForTimeout(2000);


    const submit=await page.locator('//*[@onclick="logIn()"]');
    await submit.click();
    await page.waitForTimeout(2000);

    const logout=await page.locator('//*[@onclick="logOut()"]');
    await expect(logout).toBeVisible();

})