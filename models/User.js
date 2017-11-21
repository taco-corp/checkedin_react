const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: "email is required"
    },
    linkedinId: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profileURL: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    savedUsers: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids of User's
            ref: "User"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
