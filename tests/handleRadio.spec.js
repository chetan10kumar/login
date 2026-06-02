/*Handing input box*/
const {test,expect}=require('@playwright/test');

test.skip('handle inputbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const first=await page.locator('//*[@id="name"]');
    await expect(first).toBeVisible();
    await expect(first).toBeEmpty();
    await expect(first).toBeEditable();
    await expect(first).toBeEnabled();
    await first.fill("Chetan")
    await page.waitForTimeout(2000);

})  

/*Handles radio buttons for checked*/
test.skip('Handle radio button',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const male=await page.locator('//*[@id="male"]');
    await male.check();
    await expect(male).toBeChecked();
    await expect(await page.locator('//*[@id="male"]').isChecked()).toBeTruthy();
})

/*Handle radio button for unchcked*/
test('Handle radio',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const female=await page.locator('//*[@id="female"');
    await expect(await page.locator('//*[@id="female"]').isChecked()).toBeFalsy();
})
