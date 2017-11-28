var db = require("./models");

var express = require("express");
var session = require('express-session');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes");
var passport = require('passport');
var app = express();

const PORT = process.env.PORT || 8080;
var db = require("./models");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/checkedin_react",
  {
    useMongoClient: true
  }
);

// Add data to Mongo DB: .....
//db.User.create({"_id":"33333596e85f07235822f6dc","email":"dude@yahoo.edu","linkedinId":"AAAAAA4geP","firstName":"Joe","lastName":"Smith","profileURL":"https://www.linkedin.com/in/joesmith","picture":"http://via.placeholder.com/80x80","__v":0,"savedUsers":[]});
//db.Event.create({_id:"222222244444444444444444", hostUser: "33333596e85f07235822f6dc", location: "Durham, NC building", eventName: "Programmer's Story", eventDate:"2017/12/08", eventTime:"20:00", description: "Learn about this programmer's experiences.", keywords: "programmer"});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
