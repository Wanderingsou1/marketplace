const productService = require("../services/productService");


// CREATE PRODUCT
exports.createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};


// GET ALL PRODUCTS
exports.getProducts = async (req, res, next) => {
  try {
    const result = await productService.getProducts(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};


// GET SINGLE PRODUCT
exports.getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};


// UPDATE PRODUCT
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
};


// DELETE PRODUCT
exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await productService.deleteProduct(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
