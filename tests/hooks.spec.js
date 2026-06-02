/*Hooks in Playwright*/
/*There are four hooks in playwright*/
/*First is BeforeEach*/
/*Second is AfterEach*/
/*Third is beforeAll*/
/*Fourth is AfterAll*/
/*Before each-This hook get executed before each test*/
/*After each-This hook get executed after each test*/
/*Before all-This hook get executed before any of the test running*/
/*After all-This hook is executed once after all the test have been run*/
const {test,expect}=require('@playwright/test');
test('Home Page',async({page})=>{
    await page.goto('https://demoblaze.com/');
    //login
    const login=await page.locator('//*[@id="login2"]').click();
    const username=await page.locator('//*[@id="loginusername"]');
    await username.fill("chetan10");
    const password=await page.locator('//*[@id="loginpassword"]');
    await password.fill("chetan1004");
    const loginn=await page.locator('//*[@onclick="logIn()"]');
    await loginn.click();


    await page.waitForTimeout(5000);
    //HomePage Test
    const products=await page.$$('//*[@id="tbodyid"]/div/div');
    console.log(products.length);
    expect(products.length).toBe(9);
    //logout
    const logout=await page.locator('//*[@onclick="logOut()"]');
    await logout.click();



    //login
    //Home Page
    //logout

})
test.only('Add Product to cart Test',async({page})=>{
    await page.goto('https://demoblaze.com/');
    //login
    const login=await page.locator('//*[@id="login2"]').click();
    const username=await page.locator('//*[@id="loginusername"]');
    await username.fill("chetan10");
    const password=await page.locator('//*[@id="loginpassword"]');
    await password.fill("chetan1004");
    const loginn=await page.locator('//*[@onclick="logIn()"]');
    await loginn.click();

    //Add product to cart
    const item=await page.locator('//*[@id="tbodyid"]/div[1]/div/a').click();
    const addBtn=await page.locator('//*[@onclick="addToCart(1)"]').click();
    page.on('dialog',async dialog=>{
        await expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })
    await page.waitForTimeout(2000);


    //logout
    const logout=await page.locator('//*[@onclick="logOut()"]');
    await logout.click();

    
})
