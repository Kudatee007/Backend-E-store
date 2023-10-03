const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiry,
} = require("../controller/enqCtrl");
const { authMiidleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createEnquiry);
router.put("/:id", authMiidleware, isAdmin, updateEnquiry);
router.delete("/:id", authMiidleware, isAdmin, deleteEnquiry);
router.get("/:id", getEnquiry);
router.get("/", getAllEnquiry);

module.exports = router;