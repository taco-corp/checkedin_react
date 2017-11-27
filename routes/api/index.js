const router = require("express").Router();
// This was giving an error so I commented it out-Steve
// const mainRoutes = require("./main");

// new routes
// This was giving an error so I commented it out-Steve
// router.use("/main", mainRoutes);
const authRoutes = require("./auth");
const usersRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

module.exports = router;
