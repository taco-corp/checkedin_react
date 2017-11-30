const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
.get(eventsController.findAll)
.post(eventsController.create);

// Matches with "/api/events/name/:searchTerm"
// This will find all events whose name is LIKE "name"
// It will also do exact matches
router
.route("/name/:searchTerm")
.get(eventsController.findByName);

// Matches with "/api/events/addAttendee"
// This checks in the currently logged in user to
// the event on the event page
router
.route("/addAttendee")
.put(eventsController.addAttendee);

// Matches with "/api/events/:id"
router
.route("/:id")
.get(eventsController.findById)
.delete(eventsController.remove);

module.exports = router;

