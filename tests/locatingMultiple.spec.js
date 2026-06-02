/*Locating multiple links in webpage*/
const {test,expect}=require('@playwright/test');
test.skip('Multiple Links',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    const links=await page.$$('a');
    for(const link of links)
    {
        const linkValue=await link.textContent();
        console.log(linkValue);
    }
})

/*Locating link and extracting the name od data*/
test('Multiple Element',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForSelector('//*[@id="tbodyid"]//h4/a')
    const prodLink=await page.$$('//*[@id="tbodyid"]//h4/a')
    for(const link of prodLink)
    {
        const linkValue=await link.textContent();
        console.log(linkValue);
    }

})