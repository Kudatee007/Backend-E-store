const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controller/brandCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiidleware, isAdmin, createBrand);
router.put("/:id", authMiidleware, isAdmin, updateBrand);
router.delete("/:id", authMiidleware, isAdmin, deleteBrand);
router.get("/:id", authMiidleware, getBrand);
router.get("/", authMiidleware, getAllBrand);

module.exports = router;