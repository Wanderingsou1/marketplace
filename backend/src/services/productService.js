const Product = require("../models/Product");

// Create Product
exports.createProduct = async (data) => {
  const { name, description, price, image } = data;

  if (!name || !description || !price) {
    throw new Error("Please provide all required fields");
  }

  return await Product.create({ name, description, price, image });
};

// Get Products (Search + Pagination)

exports.getProducts = async ({ search = "", page = 1, limit = 6 }) => {
  const query = {
    name: { $regex: search, $options: "i" },
  };

  const skip = (page - 1) * limit;

  const products = await Product.find(query)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Product.countDocuments(query);

  return {
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
    products,
  };
};

// Get Product by ID
exports.getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}


// Update Product

exports.updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!product) throw new Error("Product not found");

  return product;
};

// DELETE PRODUCT
exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);

  if (!product) throw new Error("Product not found");

  return { message: "Product deleted successfully" };
};



