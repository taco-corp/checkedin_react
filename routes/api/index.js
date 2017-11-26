const router = require("express").Router();
// This was giving an error so I commented it out-Steve
// const mainRoutes = require("./main");

// new routes
// This was giving an error so I commented it out-Steve
// router.use("/main", mainRoutes);
const authRoutes = require("./auth");
router.use("/auth", authRoutes);

const eventRoutes = require("./event");
router.use("/event", eventRoutes);

const userRoutes = require("./user");
router.use("/user", userRoutes);

module.exports = router;
