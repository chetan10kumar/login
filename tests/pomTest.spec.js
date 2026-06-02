import {test,expect} from '@playwright/test' ;
import {LoginPage} from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
test('Test',async({page})=>{
        //Login
       const loginn= new LoginPage(page);
       await loginn.gottoLoginPage();
       await loginn.login("chetan10","chetan1004");
       await page.waitForTimeout(3000);
        //HomePage
        const home=new HomePage(page);
        await home.AddProductToCart("Nexus 6");
        await page.waitForTimeout(2000);
        await home.gotoCart();
       
        //Cart
})