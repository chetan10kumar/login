const {test,expect}=require('@playwright/test');
test.skip('CheckBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const sunday=await page.locator('//*[@id="sunday"]');
    await sunday.check();
    await expect(sunday).toBeChecked();
    await expect(await page.locator('//*[@id="sunday"]').isChecked()).toBeTruthy();
})
test('Multiple checkboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const locators=[
        '//*[@id="sunday"]',
        '//*[@id="monday"]',
        '//*[@id="friday"]'
    ]
    for( const check of locators)
    {
        await page.locator(check).check();

    }
    
    for(const checkk of locators)
    {
        if(await page.locator(checkk).isChecked())
        {
            await page.locator(checkk).uncheck();
        }
    }
})