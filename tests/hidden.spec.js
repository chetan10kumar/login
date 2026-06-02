const {test,expect}=require('@playwright/test');
test('Hidden options',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const username=await page.locator('//*[@name="username"]');
    await username.fill("Admin");
    await page.waitForTimeout(2000);
    const password=await page.locator('//*[@name="password"]');
    await password.fill('admin123');
    await page.waitForTimeout(2000);
    const submit=await page.getByRole('button',{type:"submit"});
    await submit.click();
    await page.waitForTimeout(2000);
    const pim=await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
    await pim.click();
   await page.waitForTimeout(2000);

})