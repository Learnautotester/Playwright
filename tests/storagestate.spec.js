const { test, expect } = require('./fixture');
const path = require('path');
const authFile = path.join(__dirname, 'auth.json');
// Test 2: Add product to cart
// Reuse previously saved authentication
test.use({
    storageState: authFile
});


test('Test 2 - Add product', async ({ page }) => {

    //await page.goto('https://www.saucedemo.com/');
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

// Test 3: Open cart
test('Test 3 - Open cart', async ({ page }) => {

    // Assuming Test 2 has already added the product
    
await page.goto("https://www.saucedemo.com/inventory.html");
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.title')).toHaveText('Your Cart');

});