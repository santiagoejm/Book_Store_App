const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);

module.exports = router;
