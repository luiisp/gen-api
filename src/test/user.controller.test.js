const {createUserController, getAllUsersController} = require('../controllers/user/user.controller.js');
const {createUser} = require('../repositorys/userRepositorys.js');

jest.mock('../repositorys/userRepositorys.js')

describe('User Create Controller ', () => {



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


    it('should return a error when create a user (Big password)', async () => {

        const req = {

            body:{
                "username":"luiisp",
                "name":"Pedro Luis",
                "password":"BiggPasswoordd@@@@1234Defaultrd",
                "email":"luisp.diias@gmail.com",
            }

        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            error: jest.fn()
        }

        await createUserController(req,res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: 'password must be at most 20 characters' })
    });



    it('should return a error when create a user (Small password)', async () => {

        const req = {

            body:{
                "username":"luiisp",
                "name":"Pedro Luis",
                "password":"small",
                "email":"luisp.diias@gmail.com",
            }

        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            error: jest.fn()
        }

        await createUserController(req,res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: 'password must be at least 6 characters' })
    });



    
    it('should return a error when create a user (Fake Email)', async () => {

        const req = {

            body:{
                "username":"luiisp",
                "name":"Pedro Luis",
                "password":"Commonpassd@@1234",
                "email":"fakeemail@",
            }

        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            error: jest.fn()
        }

        await createUserController(req,res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: 'email must be a valid email' })
    });

    


    
    
    it('should return a error when create a user (Big username)', async () => {

        const req = {

            body:{
                "username":"luiisphahahahahhahahahahahqahahahahahahahhahahahahahhaha",
                "name":"Pedro Luis",
                "password":"Commonpassd@@1234",
                "email":"luisp.diias@gmail.com",
            }

        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            error: jest.fn()
        }

        await createUserController(req,res)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({ error: 'username must be at most 30 characters' })
    });

});

describe('Get All Users Controller ', () => {

    it('should return all users', async () => {
    
        const req = {
            query:{
                "skip":0,
                "take":10
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await getAllUsersController(req,res)
        expect(res.status).toHaveBeenCalledWith(200)
    

    })

});

describe('Get User By ID Controller', () => {





});