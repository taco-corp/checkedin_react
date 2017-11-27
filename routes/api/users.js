const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const eventController = require("../../controllers/eventController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


router
  .route("/api/users")
  .get(usersController.findAll);





  // app.get("/api/users", function(req, res) {
  // 	db.User.findAll({})
  // 	.then(function(dbUser){
  // 	res.json(dbUser);
  // 	});    
  // });

module.exports = router;

