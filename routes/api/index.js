const router = require("express").Router();
// This was giving an error so I commented it out-Steve
// const mainRoutes = require("./main");

// new routes
// This was giving an error so I commented it out-Steve
// router.use("/main", mainRoutes);
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const eventsRoutes = require("./events");

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
