const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAproduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,

} = require("../controller/productCtrl");
const { isAdmin, authMiidleware } = require("./../middlewares/authMiddleware");


router.post("/", authMiidleware, isAdmin, createProduct);

router.get("/:id", getAproduct);
router.put("/wishlist", authMiidleware, addToWishlist);
router.put("/rating", authMiidleware, rating);
router.get("/", getAllProduct);
router.put("/:id", authMiidleware, isAdmin, updateProduct);
router.delete("/:id", authMiidleware, isAdmin, deleteProduct);


module.exports = router;
