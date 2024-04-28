import {describe, it} from 'node:test';
import assert from 'assert';
import {getAllUsers, getUserById} from './usersService.js';

describe('usersService test Suite', () => {
    let user;

    beforeEach(async () => {
        user = await createUser({ 
            "username":"luiisp",
            "name":"Pedro Luis ",
            "password":"defaultpassword@@@@1234",
            "email":"luisp.diias@gmail.com",
            "bio":"Hello World"
        });
    });

    afterEach(async () => {
        await deleteUser(user.id);
    });


});