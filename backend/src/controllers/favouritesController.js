const favouritesService = require("../services/favouritesService");


// ADD FAVORITE
exports.addFavourite = async (req, res, next) => {
  try {
    const result = await favouritesService.addFavourite(
      req.user._id,
      req.params.productId
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};


// REMOVE FAVORITE
exports.removeFavourite = async (req, res, next) => {
  try {
    const result = await favouritesService.removeFavourite(
      req.user._id,
      req.params.productId
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};


// GET FAVORITES
exports.getFavourites = async (req, res, next) => {
  try {
    const favourites = await favouritesService.getFavourites(
      req.user._id
    );
    res.json(favourites);
  } catch (error) {
    next(error);
  }
};
