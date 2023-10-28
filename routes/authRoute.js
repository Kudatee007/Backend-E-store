const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getaUser,
  deleteUser,
  updatedUser,
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
  getAllOrders,
  getOrderByUserId,
  deleteOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderInconme,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getSingleOrder,
  updateOrder,
} = require("../controller/userCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiidleware, userCart);
// router.post("/cart/applycoupon", authMiidleware, applyCoupon);
router.post("/cart/create-order", authMiidleware, createOrder);
router.get("/all-users", getAllUsers);
router.get("/getmyorders", authMiidleware, getMyOrders);
router.get("/getallorders", authMiidleware, isAdmin, getAllOrders);
router.get("/getaOrder/:id", authMiidleware, isAdmin, getSingleOrder);
router.put("/updateOrder/:id", authMiidleware, isAdmin, updateOrder);
// router.post("/getorderbyuser/:id", authMiidleware, isAdmin, getAllOrders);
// router.delete("/delete-order/:id", authMiidleware, isAdmin, deleteOrder);
router.get("/refresh", handleRefreshToken);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
// router.put(
//   "/order/update-order/:id",
//   authMiidleware,
//   isAdmin,
//   updateOrderStatus
// );
router.put("/password", authMiidleware, updatePassword);
router.get("/logout", logout);
router.get("/wishlist", authMiidleware, getWishlist);
router.get("/cart", authMiidleware, getUserCart);
router.get(
  "/getMonthWiseOrderIncome",
  authMiidleware,
  getMonthWiseOrderInconme
);
// router.get("/getMonthWiseOrderCount", authMiidleware, getMonthWiseOrderCount);
router.get("/getyearlyorders", authMiidleware, getYearlyTotalOrders);
router.get("/:id", authMiidleware, isAdmin, getaUser);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiidleware,
  removeProductFromCart
);
router.delete(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiidleware,
  updateProductQuantityFromCart
);
// router.delete("/empty-cart", authMiidleware, emptyCart);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiidleware, updatedUser);
router.put("/save-address", authMiidleware, saveAddress);
router.put("/block-user/:id", authMiidleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiidleware, isAdmin, unblockUser);
module.exports = router;
