const { body } = require("express-validator");

exports.productValidator = [
  body("name")
    .notEmpty()
    .withMessage("Product name required"),

  body("description")
    .notEmpty()
    .withMessage("Description required"),

  body("price")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("image")
    .optional()
    .isString()
    .withMessage("Image must be string"),
];
