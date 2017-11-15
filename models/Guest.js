const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  firstName: { type: String, 
    required: true 
  },
  lastName: { type: String, 
  required: true 
  },
  linkedinId: { type: String, 
  required: true 
  },
  profileURL: { type: String, 
  required: true 
  },
  picture: { type: String, 
  required: true 
  },
  email: { type: String, 
  required: true 
  },
  eventURL: { type: String, 
    required: true 
  }
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;