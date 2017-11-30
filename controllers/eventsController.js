const db = require("../models");

// Defining methods for the eventController
module.exports = {
    findAll: function (req, res) {
        db.Event
        .find(req.query)
        .populate("User")
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Event
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findEvent: function(req, res) {
        console.log("FindByName")
        db.Event
        .find({eventName: req.params.eventName})
        .populate("User")
        .then(dbModel => res.json(dbModel));
	},
    findByName: function (req, res) {
        // find events whose name is LIKE req.params.name
        db.Event
        .find({eventName: new RegExp('.*' + req.params.searchTerm + '.*', "i")})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // host of the event will be set to currently logged in user
        db.User
        .findOne({linkedinId: req.user.id})
        .then(user => {
            // create a new event, with this user as the host
            db.Event
            .create({
                hostUser: user._id,
                eventName: req.body.eventName,
                location: req.body.location,
                eventDate: req.body.date,
                eventTime: req.body.time,
                description: req.body.description,
                keywords: req.body.keywords,
                eventURL: req.body.eventURL,
                attendees: []
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Event
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Event
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //This function adds an attendee to an event when the check in button is clicked
    addAttendee: function (req, res){
        //console.log("Add attendee");
        db.Event
        .findByIdAndUpdate(
            req.body.eventId, 
            {$push: {'attendees': req.body}})
           // {safe:true, upsert: true, new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
