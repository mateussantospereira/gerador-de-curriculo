const { Router } = require("express");
const pdfController = require("../controllers/pdfController");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
});
router.get("/create", pdfController.create);

module.exports = router;