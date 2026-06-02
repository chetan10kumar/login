//Handling the Alerts in playwright
const {test,expect}=require('@playwright/test');
test('Alert Handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
})

