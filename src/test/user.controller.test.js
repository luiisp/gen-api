const {
  createUserController,
  deleteUserController,
  updateUserCredentialsController,
  getAllUsersController,
  getUserByIdController,
} = require("../controllers/user/user.controller.js");
const { createUser } = require("../repositorys/userRepositorys.js");

jest.mock("../repositorys/userRepositorys.js");
jest.mock("../repositorys/jwt/jwtRepositorys.js");

describe("User Create Controller ", () => {

  it("should return a error when create a user (Big password)", async () => {
    const req = {
      body: {
        username: "luiisp",
        name: "Pedro Luis",
        password: "BiggPasswoordd@@@@1234Defaultrd",
        email: "luisp.diias@gmail.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      error: jest.fn(),
    };

    await createUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("should return a error when create a user (Small password)", async () => {
    const req = {
      body: {
        username: "luiisp",
        name: "Pedro Luis",
        password: "small",
        email: "luisp.diias@gmail.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      error: jest.fn(),
    };

    await createUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("should return a error when create a user (Fake Email)", async () => {
    const req = {
      body: {
        username: "luiisp",
        name: "Pedro Luis",
        password: "Commonpassd@@1234",
        email: "fakeemail@",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      error: jest.fn(),
    };

    await createUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("should return a error when create a user (Big username)", async () => {
    const req = {
      body: {
        username: "luiisphahahahahhahahahahahqahahahahahahahhahahahahahhaha",
        name: "Pedro Luis",
        password: "Commonpassd@@1234",
        email: "luisp.diias@gmail.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      error: jest.fn(),
    };

    await createUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("Get All Users Controller ", () => {
  it("should return all users", async () => {
    const req = {
      query: {
        skip: 0,
        take: 10,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllUsersController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe("Get User By ID Controller", () => {
  it("should return an error when searching for user by id", async () => {
    const req = {
      params: {
        id: 1,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getUserByIdController(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});

describe("Update User Credentials Controller", () => {
  it("should update user credentials", async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        username: "luiisp",
        name: "Pedro Luis",
        password: "Commonpassd@@1234",
        email: "luisp.diias@gmail.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateUserCredentialsController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should return error update user credentials (Blank fields)", async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        username: "",
        name: "",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateUserCredentialsController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("should return error update user credentials (Big username)", async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        username:
          "biiiiiiigggggusserrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr@@@@@@@@@@",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateUserCredentialsController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

describe("Delete User Controller", () => {
  it("should delete user", async () => {
    const req = {
      params: {
        id: 1,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await deleteUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
