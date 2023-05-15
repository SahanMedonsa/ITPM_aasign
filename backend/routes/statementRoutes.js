const express = require("express");
const router = express.Router();
const statementController = require("../controllers/statementController");

router.post("/addStatment", statementController.addStatments);
router.get("/getStatement", statementController.getAllStatement);
router.get("/getStatement/:id", statementController.getByID);
router.put("/updatestatement/:id", statementController.updateStatement);
router.delete("/deleteStatement/:id", statementController.deleteStatment);

module.exports =router;