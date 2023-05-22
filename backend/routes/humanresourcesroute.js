const express = require("express");
const router = express.Router();
const hresourceController = require("../controllers/h_resourcecontrollre");

router.post("/addhresource", hresourceController.addhresource);
router.get("/gethresource", hresourceController.getAllhresource);
router.get("/gethresource/:id", hresourceController.getByIDhresource);
router.put("/updatehresource/:id", hresourceController.updatehresource);
router.delete("/deletehresource/:id", hresourceController.deletehresource);

module.exports =router;