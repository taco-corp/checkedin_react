const router = require("express").Router();
const usersController = require("../../controllers/usersController");

var db = require("../../models");

var ids = require("./ids");
var passport = require('passport');
var LINKEDIN_CLIENT_ID = ids.LINKEDIN_CLIENT_ID;
var LINKEDIN_CLIENT_SECRET = ids.LINKEDIN_CLIENT_SECRET;
var CALLBACKURL = ids.CALLBACKURL;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  Here, the complete Linkedin profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// passport strategy init
passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: CALLBACKURL,
    scope: ['r_emailaddress', 'r_basicprofile']
}, function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
    });
}));

// authenticate with LinkedIn
router.route('/linkedin')
.get(passport.authenticate('linkedin', { state: 'SOME STATE'  }));

// this is the callback function that gets called when we authenticate with LinkedIn
router.route('/linkedin/callback')
.get(passport.authenticate('linkedin', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication
            // Add the user info to the DB if it's not already there.
            console.log("req.user: ", req.user);
            var userData = req.user;
            db.User
            .findOne({email: userData.emails[0].value})
            .then(function (user) {
                // if user doesn't exist in the database, then we can add it
                if (user === null) {
                    // user doesn't exist in the db
                    // create a new user using the req.user object
                    db.User
                    .create({
                        email: userData.emails[0].value,
                        linkedinId: userData.id,
                        firstName: userData.name.givenName,
                        lastName: userData.name.familyName,
                        profileURL: userData._json.publicProfileUrl,
                        picture: userData.photos[0].value,
                        savedUsers: []
                    })
                    .then(function (user) {
                        console.log("added user: ", userData.emails[0].value);
                        // TODO: redirect to the home page in react app
                        res.redirect('http://localhost:3000/');
                    })
                    .catch(function (err) {
                        // If an error occurred, send it to the client
                        res.json(err);
                    });
                }
                else {
                    // user already exists in the DB.
                    // TODO: just redirect to the home page in react app
                    res.redirect('http://localhost:3000/');
                }
            })
            .catch(function (err) {
                // If an error occurs, send it to the client
                res.json(err);
            });

        });


// This is a route to get info for the currently logged-in user
// TODO: any client code that needs to get logged-in user's info can use this route
router.route('/loggedinUser')
.get(function (req, res) {
    if (req.user === undefined) {
        res.json(null);
    }
    else {
        res.json(req.user);
    }
});

// This is a route to log out of linkedIn.
router.route('/logout')
.get(function(req, res){
    req.logout();
    res.json("loggedout");
});


module.exports = router;

