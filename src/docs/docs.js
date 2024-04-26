const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Gen Api Docs",
        version: "0.1.0",
        description:
          "desc",
        license: {
          name: "MIT",
          url: "",
        },
        contact: {
          name: "Pedro Luis Dias",
          url: "https://github.com/luiisp",
          email: "luisp.diias@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

module.exports = options;