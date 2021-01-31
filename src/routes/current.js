const express = require("express");
const router = express.Router();
const current_controller = require("../controllers/current");

router.post("/", current_controller.current_root_post);
router.get("/", current_controller.current_root_get);

module.exports = router;
