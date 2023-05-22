const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/addPost", postController.addPost);
router.get("/getPost", postController.getAllPost);
router.get("/getPost/:id", postController.getByID);
router.put("/updatePost/:id", postController.updatePost);
router.delete("/deletePost/:id", postController.deletePost);

module.exports = router;