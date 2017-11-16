const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const ids = require("./ids");
const app = express();
const PORT = process.env.PORT || 8080;
var db = require("./models");

var LINKEDIN_CLIENT_ID = ids.LINKEDIN_CLIENT_ID;
var LINKEDIN_CLIENT_SECRET = ids.LINKEDIN_CLIENT_SECRET;
var CALLBACKURL = ids.CALLBACKURL;

// console.log(LINKEDIN_CLIENT_ID);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/public"));
app.use(express.static("client/public"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
 
//TODO define passport
passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_CLIENT_ID,
  clientSecret: LINKEDIN_CLIENT_SECRET,
  callbackURL: CALLBACKURL,
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect... 
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to 
    // represent the logged-in user. In a typical application, you would want 
    // to associate the LinkedIn account with a user record in your database, 
    // and return that user instead. 
    return done(null, profile);
  });
}));

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this 
    // function will not be called. 
  }
);



// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/checkedin_react",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
