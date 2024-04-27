import { pingTest } from '../controllers/utils/utils.controller.js';
import {options} from '../docs/docs.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const specs = swaggerJsdoc(options);

  
export const utilsRoutes = (app) => {
    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
      );
    app.get('/ping', pingTest);

};