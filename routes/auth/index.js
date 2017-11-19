const router = require("express").Router();

const linkedinRoutes = require("./linkedin");
router.use("/linkedin", linkedinRoutes);

module.exports = router;
