const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const {
  addFavourite,
  removeFavourite,
  getFavourites,
} = require("../controllers/favouritesController");

router.post("/:productId", authMiddleware, addFavourite);
router.delete("/:productId", authMiddleware, removeFavourite);
router.get("/", authMiddleware, getFavourites);

module.exports = router;
