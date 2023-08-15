const express = require("express");
const {
  serverPage,
  getProducts,
  createProducts,
} = require("../controller/product-controller");

const router = express.Router();

router.use(express.json());

router.get("/", serverPage);

router.post("/api/products", createProducts);

router.get("/api/products", getProducts);

module.exports = router;
