const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
// const eventController = require("../../controllers/eventController");

// Matches with "/api/users"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/users/:id"
router
  .route("/id/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);


router
  .route("/api/events")
  .get(eventsController.findAll);

module.exports = router;

