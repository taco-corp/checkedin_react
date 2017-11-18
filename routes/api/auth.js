const router = require("express").Router();
const userController = require("../../controllers/userController");

// api/auth/test
router.route("/test")
  .get(userController.findAll);

module.exports = router;

