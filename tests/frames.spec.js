const {test,expect}=require('@playwright/test');
test('Frames/IFrame',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    //Hadnling frame by fame locator
    //total frames 
   const allframes= await page.frames();
   console.log(allframes.length);


})