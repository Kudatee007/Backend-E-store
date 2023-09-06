const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getaUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controller/userCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiidleware, userCart);
router.post("/cart/applycoupon", authMiidleware, applyCoupon)
router.post("/cart/cash-order", authMiidleware, createOrder)
router.get("/all-users", getAllUsers);
router.get("/get-orders", authMiidleware, getOrders);
router.get("/refresh", handleRefreshToken);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/order/update-order/:id", authMiidleware, isAdmin, updateOrderStatus);
router.put("/password", authMiidleware, updatePassword);
router.get("/logout", logout);
router.get("/wishlist", authMiidleware, getWishlist);
router.get("/cart", authMiidleware, getUserCart);
router.get("/:id", authMiidleware, isAdmin, getaUser);
router.delete("/empty-cart", authMiidleware, emptyCart);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiidleware, updateUser);
router.put("/save-address", authMiidleware, saveAddress);
router.put("/block-user/:id", authMiidleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiidleware, isAdmin, unblockUser);
module.exports = router;
