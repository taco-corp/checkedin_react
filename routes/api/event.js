const router = require("express").Router();
// const userController = require("../../controllers/userController");
const eventController = require("../../controllers/eventController");

// what should this route be?
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);

// what should this route be?
router
  .route("/:id")
  .get(eventController.findById)
  .put(eventController.update)
  .delete(eventController.remove);


router
  .route("/api/events")
  .get(eventController.findAll);


module.exports = router;