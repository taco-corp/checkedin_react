const router = require("express").Router();
const mainRoutes = require("./main");

// new routes
router.use("/main", mainRoutes);

module.exports = router;
