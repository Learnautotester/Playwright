const{test:base,expect}=require('@playwright/test');


const test=base.extend({
    loggedInpage:async({page},use)=>{

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await use(page);

        console.log("Test logged in");


    }


})

module.exports = { test, expect };

