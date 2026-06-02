const {test,expect}=require('@playwright/test');
/*Here even if one assertion got failed whole code termination got stopped*/
test.skip('Hard Assertions',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://demoblaze.com/");

})
test('Soft Assertion',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await expect.soft(page).toHaveTitle("Stor");
    await expect.soft(page).toHaveURL('https://demoblaze.com/')
})


