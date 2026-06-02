/*Selecting single element in drop down*/
const {test,expect}=require('@playwright/test');
test.skip('Select Element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const element=await page.locator('//*[@id="country"]');
    //await element.selectOption({label:"France"});
    //selecting option by visible text
    //await element.selectOption("France");
    //selecting option by value attribute
   // await element.selectOption({value:"japan"});
   //selecting option by the index of the option
   await element.selectOption({index:4});


    await page.waitForTimeout(2000);
})
//Priniting all the elements of drop down
test.skip('Printing all elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const element=await page.$$('//*[@id="country"]/option');
    for(const ele of element)
    {
        const value=await ele.textContent();
        console.log(value);
    }
})
/*Count of elements in drop down*/
test.skip('Count of elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const count=await page.$$('//*[@id="country"]/option');
    console.log(count.length);
    await expect(count.length).toBe(10);
})
/*Checking presence of value in dropdown*/
test('Presence of element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const element=await page.locator('//*[@id="country"]').textContent();
    await expect(element.includes("India")).toBeTruthy();
})