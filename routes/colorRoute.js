const express = require("express");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getAllColor,
} = require("../controller/colorCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiidleware, isAdmin, createColor);
router.put("/:id", authMiidleware, isAdmin, updateColor);
router.delete("/:id", authMiidleware, isAdmin, deleteColor);
router.get("/:id", authMiidleware, getColor);
router.get("/", authMiidleware, getAllColor);

module.exports = router;