const {test,expect}=require('@playwright/test');
test('Mouse hover actions',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    const desktops=await page.getByText('Desktops');
    
    //mouse hover
    await desktops.hover();
    const mac=await page.getByText('Mac (1)');
    await mac.hover();
    await page.waitForTimeout(2000);
})