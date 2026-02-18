const authService = require("../services/authService");


// REGISTER
exports.registerUser = async (req, res, next) => {
  try {
    const result = await authService.registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};


// LOGIN
exports.loginUser = async (req, res, next) => {
  try {
    const result = await authService.loginUser(req.body);

    res.json({
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};
