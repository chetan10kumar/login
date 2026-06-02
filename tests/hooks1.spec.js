const {test,expect}=require('@playwright/test');
let page;
test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto('https://demoblaze.com/');
    const login=await page.locator('//*[@id="login2"]').click();
    const username=await page.locator('//*[@id="loginusername"]');
    await username.fill("chetan10");
    const password=await page.locator('//*[@id="loginpassword"]');
    await password.fill("chetan1004");
    const loginn=await page.locator('//*[@onclick="logIn()"]');
    await loginn.click();
})
test.afterEach(async ({})=>{
    const logout=await page.locator('//*[@onclick="logOut()"]');
    await logout.click();
})
test('Home Page Test',async({})=>{
    const products=await page.$$('//*[@id="tbodyid"]/div/div');
    console.log(products.length);
    expect(products.length).toBe(9);
})

test('Add to Cart',async({})=>{
    const item=await page.locator('//*[@id="tbodyid"]/div[1]/div/a').click();
    const addBtn=await page.locator('//*[@onclick="addToCart(1)"]').click();
    page.on('dialog',async dialog=>{
        await expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })
})
