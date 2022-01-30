const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);
// const { response, request } = require("express");
// const express = require("express");
// const router = express.Router();
// const products = require("../seeds/development/01_products_table");

router.get('/', async (request, response) => {
  response.send(products);
});
