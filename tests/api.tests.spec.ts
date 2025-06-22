import { test, expect } from '@playwright/test';
import { ok } from 'assert';

test.only('API GET Request', async ({ request }) => {
    const response = await request.get('users/2');

    const responseBody = JSON.parse(await response.text());
    console.log("************ " + responseBody + " ********************")
    

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json())
})

test('API POST Request', async ({ request }) => {
    const response = await request.post('users', {

        data: {
            "name": "Benjanata",
            "job": "leader",
        }
    })
    
    expect(response.status()).toBe(201);
    expect(await response.text()).toContain('Benjanata')
})

test('API POST Requests', async ({ request }) => {
    const response = await request.post('users', {

        data: {
            "name": "mot le geday",
            "job": "leader",
        }
    })
    
    expect(response.status()).toBe(201);
    expect(await response.text()).toContain('mot le geday')
})

test('API PUT Request', async ({ request }) => {
    const response = await request.put('users/2', {
        data: {
            "name": "Benin",
            "job": "zion resident"
        }
    })

    expect(await response.text()).toContain("Benin");
    expect(response).toBeOK()
})


test('API DELETE Request', async({request}) => {
    const response = request.delete('users/2');

    expect((await response).status()).toBe(204);
})