const swaggerAutogen = require('swagger-autogen')()

const outputFile = 'src/docs/swagger_output.json'
const endpointsFiles = ['src/routes/index.js', 'src/routes/user.routes.js', 'src/routes/utils.routes.js']

swaggerAutogen(outputFile, endpointsFiles)