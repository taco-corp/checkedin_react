const router = require("express").Router();
const userController = require("../../controllers/userController");
// const eventController = require("../../controllers/eventController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


router
  .route("/api/users")
  .get(userController.findAll);
  





  // app.get("/api/users", function(req, res) {
  // 	db.User.findAll({})
  // 	.then(function(dbUser){
  // 	res.json(dbUser);
  // 	});    
  // });

module.exports = router;

