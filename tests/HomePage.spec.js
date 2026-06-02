/*Verifying the Url and Title of the webpage*/

/*TestCase for verifying the title of page*/
const {test,expect} = require('@playwright/test');
test('Title',async({page})=>{
    await page.goto('https://demoblaze.com/');
    const title=await page.title();
    console.log("Title of the Page:",title)
    await expect(page).toHaveTitle("STORE");
})


/*TestCase for verifying the Url of the Page*/

test('Url',async({page})=>{
    await page.goto('https://demoblaze.com/')
    const url=await page.url();
    console.log("Url of the Page:",url)
    await expect(page).toHaveURL("https://demoblaze.com/");
})