/*Handling drag and Drop in playwright*/
const {test,expect}=require('@playwright/test');
test('Drag And Drop',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const source=await page.locator('//*[@id="draggable"]');
    const destination=await page.locator('//*[@id="droppable"]');
    await source.hover();
    await page.mouse.down();
    await destination.hover();
    await page.mouse.up();
    await page.waitForTimeout(2000);
})