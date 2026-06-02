/*Uplading file in playwright*/
const {test,expect}=require('@playwright/test');
test.skip('Uploading single file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('//*[@id="singleFileInput"]');
    await page.locator('//*[@id="singleFileInput"]').setInputFiles('uploadFiles/ResumeLatest.docx')
    await page.waitForTimeout(2000);

})
test.only('Multiple Files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('//*[@id="multipleFilesInput"]')
    await page.locator('//*[@id="multipleFilesInput"]').setInputFiles(['uploadFiles/assigment_9.docx','uploadFiles/ResumeLatest.docx']);
    await page.waitForTimeout(2000);


})