const {createUserController} = require('../controllers/user/user.controller.js');
const {createUser} = require('../repositorys/userRepositorys.js');

jest.mock('../repositorys/userRepositorys.js')

describe('User Controller ', () => {



    it('should create a user', async () => {
    
        const req = {

            body:{
                "username":"luiisp",
                "name":"Pedro Luis ",
                "password":"defaultrd@@@@1234",
                "email":"luisp.diias@gmail.com",
                "bio":"Hello World"
            }

        }


        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await createUserController(req,res)
        expect(res.status).toHaveBeenCalledWith(201)
        expect(createUser).toHaveBeenCalledTimes(1)


    
    });



});