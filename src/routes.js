const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.detail);
routes.put("/products/:id", ProductController.update);
routes.post("/products", ProductController.store);
routes.delete("/products/:id", ProductController.remove);

module.exports = routes;