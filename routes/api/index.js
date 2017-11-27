const router = require("express").Router();
// This was giving an error so I commented it out-Steve
// const mainRoutes = require("./main");

// new routes
// This was giving an error so I commented it out-Steve
// router.use("/main", mainRoutes);
const authRoutes = require("./auth");
const userRoutes = require("./user");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
