const User = require("../models/User");
const generateToken = require("../utils/generateToken");


// REGISTER SERVICE
exports.registerUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("Please provide all required fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  return {
    token: generateToken(user._id),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};


// LOGIN SERVICE
exports.loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return {
    token: generateToken(user._id),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};
