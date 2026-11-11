
const { test, expect } = require('./fixture');
const path = require('path');
const authFile = path.join(__dirname, 'auth.json');
// Test 1: Login
test('Test 1 - Login', async ({loggedInpage }) => {
    
    await expect(loggedInpage.locator('.title')).toHaveText('Products');
   await loggedInpage.context().storageState({
        path: authFile
    });

});



