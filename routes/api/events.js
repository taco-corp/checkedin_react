const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
.get(eventsController.findAll)
.post(eventsController.create);

// Matches with "/api/events/:id"
router
.route("/:id")
.get(eventsController.findById)
.put(eventsController.update)
.delete(eventsController.remove);


// Matches with "/api/events/name/:name"
// This will find all events whose name is LIKE "name"
router
.route("/name/:searchTerm")
.get(eventsController.findByName);

//http://localhost:8080/api/events/name/demoevent3
router
.route("/name/:eventName")
.get(eventsController.findEvent)

module.exports = router;

