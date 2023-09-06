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
  uploadImages,
} = require("./../controller/productCtrl");
const { isAdmin, authMiidleware } = require("./../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");

router.post("/", authMiidleware, isAdmin, createProduct);
router.put(
  "/upload/:id",
  authMiidleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.get("/:id", getAproduct);
router.put("/wishlist", authMiidleware, addToWishlist);
router.put("/rating", authMiidleware, rating);
router.get("/", getAllProduct);
router.put("/:id", authMiidleware, isAdmin, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
