const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProdcts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Get all products route
router.get("/", getProdcts);

// Get product by id route
router.get("/:id", getProduct);

// Create a new product route
router.post("/", createProduct);

// Update product route
router.put("/:id", updateProduct);

// Delete product route
router.delete("/:id", deleteProduct);







// module export
module.exports = router;
