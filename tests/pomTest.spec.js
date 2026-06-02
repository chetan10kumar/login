import {test,expect} from '@playwright/test' ;
import {LoginPage} from '../pages/LoginPage'
test('Test',async({page})=>{
        //Login
       const loginn= new LoginPage(page);
       await loginn.gottoLoginPage();
       await loginn.login("chetan10","chetan1004");
       await page.waitForTimeout(3000);
        //HomePage
        //Cart
})