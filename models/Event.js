const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  // update hostName to use the info from linkedin if possible
  host: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },
  location: { type: String, 
    trim: true,
    required: "Event Location is Required" 
  },
  eventName: { type: String, 
    trim: true,
    required: "Event Name is Required" 
  },
// ****Not sure if we're going to use this or not****
//   sanitizedEventName: { type: String 
//   },
  description: { type: String,
    trim: true,
    required: "Please Enter an Event Description" 
  },
  keywordOne: { type: String, 
    trim: true,
    required: "You Must Enter at Least One Keyword" 
  },
  keywordTwo: { type: String,
    trim: true,
  },
  keywordThree: { type: String,
    trim: true 
  },
  eventURL: { type: String,
    trim: true 
  },
  eventCreated: {
    type: Date,
        default: Date.now 
  },
  // Need to check if this will allow us to populate multiple event guests 
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]  

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;