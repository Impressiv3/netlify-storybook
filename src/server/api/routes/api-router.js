const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const favoritesRouter = require('./favorites.router');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);
router.use('/products', productsRouter);
router.use('/user', usersRouter);
router.use('/favorites', favoritesRouter);

module.exports = router;
