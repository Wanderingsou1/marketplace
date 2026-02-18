const User = require("../models/User");
const Product = require("../models/Product");


// ADD TO FAVORITES
exports.addFavourite = async (userId, productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  const user = await User.findById(userId);

  if (!user.favourites.includes(productId)) {
    user.favourites.push(productId);
    await user.save();
  }

  return { message: "Added to favorites" };
};


// REMOVE FROM FAVORITES
exports.removeFavourite = async (userId, productId) => {
  const user = await User.findById(userId);

  user.favourites = user.favourites.filter(
    (fav) => fav.toString() !== productId
  );

  await user.save();

  return { message: "Removed from favorites" };
};


// GET USER FAVORITES
exports.getFavourites = async (userId) => {
  const user = await User.findById(userId)
    .populate("favourites");

  return user.favourites;
};
