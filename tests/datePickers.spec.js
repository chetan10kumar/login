/*Handling datePickers in playwright*/
const {test,expect}=require('@playwright/test');
test.skip('Handling Date Pickers',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Handling data pickers
    await page.goto('https://testautomationpractice.blogspot.com/')
    const datePicker=await page.locator('//*[@id="datepicker"]');
    await datePicker.fill('04/10/2026');
    await page.waitForTimeout(2000);



});
/*Handling date Pickers without the fill method*/


test('Handling Date Picker without fill', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const month = "May";
    const year = "2026";
    const date="10";

    const datePicker = page.locator('#datepicker');

    await datePicker.click();

    while (true)
    {
        const currentMonth =
            (await page.locator('.ui-datepicker-month').textContent()).trim();

        const currentYear =
            (await page.locator('.ui-datepicker-year').textContent()).trim();

        console.log(currentMonth, currentYear);

        if (year === currentYear && month === currentMonth)
        {
            break;
        }

        await page.locator('[title="Next"]').click();
    }
    const dates=await page.$$('//*[@class="ui-state-default"]');
    for(const dt of dates)
    {
        if(await dt.textContent()===date)
        {
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(2000);

});