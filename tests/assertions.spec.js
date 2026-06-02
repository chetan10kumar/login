/*Assertions are used to perform certain validations on webpage*/
const {test,expect}=require('@playwright/test');
test('AssertionsTest',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    /*First assertion is*/
    /*Url Assertion*/
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    /*Second assertion is*/
    /*Title Assertion*/
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    /*Third Assertion is*/
    /*Visibility assertion*/
    const logo=await page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();
    /*Fourth Assertion*/
    /*Enabled or Disabled*/
    const element=await page.locator('//*[@id="small-searchterms"]');
    await expect(element).toBeEnabled();
    /*Fifth Assertion*/
    /*To check whether checbox/radio button is selected or not*/
    const radioButton=await page.locator('//*[@id="gender-male"]');
    await radioButton.click();
    await expect(radioButton).toBeChecked();
    /*Sixth assertion to have attribute*/

    const registerButton=await page.locator('//*[@id="register-button"]');
    await expect(registerButton).toHaveAttribute('type','submit');

    /*Seventh assertion toHaveText*/
    /*We will compare the text of element*/
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    /*Eight assertion*/
    /*We will compare text by passing partial value of element*/
    await expect(page.locator('.page-title h1')).toContainText('Reg')
    /*To have Value*/
    const element1=await page.locator('//*[@id="FirstName"]');
    await element1.fill("chetan");
    await expect(element1).toHaveValue('chetan');
    /*To Have count*/
    const drop=await page.locator('//*[@id="customerCurrency"]/option');
    await expect(drop).toHaveCount(2);
})


