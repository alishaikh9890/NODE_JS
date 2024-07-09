const express = require("express");

const routes = express.Router();

const admincontroller = require("../controllers/AdminController");
const productcontroller = require("../controllers/ProductController");
const contactcontroller = require("../controllers/ContactController");


routes.get("/", admincontroller.index);
routes.get("/product", productcontroller.index);
routes.get("/contact", contactcontroller.index);

module.exports = routes;