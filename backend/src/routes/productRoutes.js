const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { productValidator } = require("../validators/productValidator");
const validate = require("../middleware/validate");

// Public routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Protected routes
router.post("/", authMiddleware, productValidator, validate, createProduct);
router.put("/:id", authMiddleware, productValidator, validate, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
