const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    hostUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Host is required"
    },
    eventName: {
        type: String,
        trim: true,
        required: "Event Name is Required"
    },
    location: {
        type: String,
        trim: true,
        required: "Event Location is Required"
    },
    eventDate: {
        type: String,
        trim: true,
        required: "Date is required"
    },
    eventTime: {
        type: String,
        trim: true,
        required: "Time is required"
    },
    description: {
        type: String,
        trim: true
    },
    keywords: {
        type: String,
        trim: true
    },
    eventURL: {
        type: String,
        trim: true
    },
    attendees: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;