const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require("../controller/productcategoryCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiidleware, isAdmin, createCategory);
router.put("/:id", authMiidleware, isAdmin, updateCategory);
router.delete("/:id", authMiidleware, isAdmin, deleteCategory);
router.get("/:id", authMiidleware, getCategory);
router.get("/", authMiidleware, getAllCategory);

module.exports = router;
