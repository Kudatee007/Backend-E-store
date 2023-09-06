const express = require("express");
const { isAdmin, authMiidleware } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages
} = require("../controller/blogCtrl");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();


router.post("/", authMiidleware, isAdmin, createBlog);
router.put("/likes", authMiidleware, likeBlog);
router.put(
  "/upload/:id",
  authMiidleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.put("/dislikes", authMiidleware, dislikeBlog);
router.put("/:id", authMiidleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiidleware, isAdmin, deleteBlog);

module.exports = router;
