const { test, expect } = require('@playwright/test');

test.skip('Get user API', async ({ request }) => {

    const response = await request.get(
        '/users/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    //console.log(responseBody);
     expect(responseBody.id).toBe(1);

    expect(responseBody.name).toBe('Leanne Graham');

    expect(responseBody.username).toBe('Bret');

    expect(responseBody.email).toBe('Sincere@april.biz');

   // console.log(responseBody);
    expect(responseBody.address.street).toBe("Kulas Light");
    expect(responseBody.company.name).toBe('Romaguera-Crona');
    expect(response.ok).toBeTruthy();

});

test('post api request',async ({request})=>{
    const response=await request.post(
        "/posts",
        {
            data: {
                title: 'My first API test',
                body: 'Learning API testing with Playwright',
                userId: 1
             }

        }

        


    )

    expect(response.status()).toBe(201);
     const responseBody = await response.json();
     console.log(responseBody);
})