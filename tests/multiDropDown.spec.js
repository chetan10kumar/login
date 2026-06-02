/*Selecting multiple elements in multiDrownDown*/
const {test,expect}=require('@playwright/test');
test.skip('Selecting Multiple Element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const element=await page.locator('//*[@id="colors"]');
    await element.selectOption(["Red","Blue","Green"])
})

//Applying assertion on Check number of options
test.skip('Number of Options',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const count=await page.locator('//*[@id="colors"]/option');

    await expect(count).toHaveCount(7);
})
//Check number of options in dropdown using js array
test('Number of elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const options=await page.$$('//*[@id="colors"]/option');
    console.log(options.length);
    await expect(options.length).toBe(7);
})
