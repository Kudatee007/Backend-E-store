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
  deleteImages
} = require("../controller/productCtrl");
const { isAdmin, authMiidleware } = require("./../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");

router.post("/", authMiidleware, isAdmin, createProduct);
router.put(
  "/upload/",
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
router.delete("/:id", authMiidleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiidleware, isAdmin, deleteImages);

module.exports = router;
