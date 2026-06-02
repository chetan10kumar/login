/*Handling the alert box*/
const {test,expect}=require('@playwright/test');
const { skip } = require('node:test');
test.skip('Handling alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator('//*[@onclick="myFunctionAlert()"]').click();

})
/*Handling the date Picker using fill method*/
test.skip('Handling datePicker using fill',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//*[@id="datepicker"]').click();
    await page.locator('//*[@id="datepicker"]').fill('04/10/2026');
    await page.waitForTimeout(2000);

})

/*Handling date pickers without fill method*/
test('Handling datepickers without fill',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const month="May";
    const year="2026";
    const date="10";
    const datePicker=await page.locator('//*[@id="datepicker"]');
    await datePicker.click();
    while(true)
    {
        const currentmonth=(await page.locator('.ui-datepicker-month').textContent()).trim();
        const currentyear=(await page.locator('.ui-datepicker-year').textContent()).trim();
        if(month==currentmonth && year==currentyear)
        {
            break;
        }
        await page.locator('[title="Next"]').click();

    }
    const dates=await page.$$('//*[@class="ui-state-default ui-state-active"]');
    for(const dt of dates)
    {
        if(await dt.textContent()===date)
        {
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(2000);

})

