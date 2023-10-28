const express = require("express");
const {
  createCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiidleware, isAdmin, createCoupon);
router.get("/", authMiidleware, isAdmin, getAllCoupon);
router.get("/:id", authMiidleware, isAdmin, getAllCoupon);
router.put("/:id", authMiidleware, isAdmin, updateCoupon);
router.delete("/:id", authMiidleware, isAdmin, deleteCoupon);

module.exports = router;
