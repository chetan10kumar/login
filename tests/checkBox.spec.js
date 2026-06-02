const {test,expect}=require('@playwright/test');
test.skip('Handle CheckBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Single checkbox
    const sunday=await page.locator('//*[@id="sunday"]');
    await sunday.check();
    await expect(await page.locator('//*[@id="sunday"]')).toBeChecked();
    await expect(await page.locator('//*[@id="sunday"]').isChecked()).toBeTruthy();
})

//Multiple checkBoxes
test('Multiple checkbox',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');
const checkboxes=[
    '//*[@id="sunday"]',
    '//*[@id="monday"]',
    '//*[@id="friday"]'

]
for(const checkk of checkboxes)
{
    await page.locator(checkk).check();
}
for(const check of checkboxes)
{
    if(await page.locator(check).isChecked())
    {
        await page.locator(check).uncheck()
    }
}
})
