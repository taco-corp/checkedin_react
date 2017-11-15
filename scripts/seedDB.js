const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the User collection and inserts the user below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/checkedinreact",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    name: "Bobby Joe",
    email: "asdf@yahoo.com"
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
