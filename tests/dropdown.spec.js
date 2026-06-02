/*Handling a Single DropDown*/
const {test,expect}=require('@playwright/test');
test.skip('Handling DropDown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const element=await page.locator('//*[@id="country"]')
    //await element.selectOption({label:"france"}); by label
    //await element.selectOption("France"); //By passing visible text
   // await element.selectOption({value:"france"}); //By passing attribute
    //await element.selectOption({index:1});
    await element.selectOption({value:"india"});
    //Assetions in dropdown -Check the total number of options
    const options=await page.locator('//*[@id="country"]/option');
    await expect(options).toHaveCount(10)

    await page.waitForTimeout(2000);
})

/*Printing Number of options in dropdown*/
test.skip('Number of Options',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const elements=await page.$$('//*[@id="country"]/option');
    for(const el of elements)
    {
        const elementValue=await el.textContent();
        console.log(elementValue);
    }
})

/*Capturing the count of options and applying assertion*/
test.skip('Count elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const options=await page.$$('//*[@id="country"]/option');
    console.log(options.length)
    await expect(options.length).toBe(10);
})

/*Check presence of value in dropdown*/
test('Value presence',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const option=await page.locator('//*[@id="country"]').textContent();
    await expect(option.includes('India')).toBeTruthy()
})

