const router = require("express").Router();
const userController = require("../../controllers/userController");

var ids = require("./ids");
var passport = require('passport');
var LINKEDIN_CLIENT_ID = ids.LINKEDIN_CLIENT_ID;
var LINKEDIN_CLIENT_SECRET = ids.LINKEDIN_CLIENT_SECRET;
var CALLBACKURL = ids.CALLBACKURL;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

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

router.route('/linkedin/callback')
.get(passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.route('/linkedin')
.get(passport.authenticate('linkedin', { state: 'SOME STATE'  }));


// api/auth/test
router.route("/test")
.get(userController.findAll);


module.exports = router;

