const mongoose = require("mongoose");

/* Mongoose Schema */
module.exports.mongooseSchema = function (data) {
  const testSchema = new mongoose.Schema({
    name: String,
  });
  data = mongoose.model(data, testSchema);
  return data;
};

/* Start the connection to the Database function */

module.exports.mongooseConnect = function () {
  const uri = "mongodb://localhost:27017/test";
  mongoose.connect(uri).then(
    () => {
      console.log("Mongoose is connected");
    },
    (err) => {
      console.log(err);
    }
  );
};

module.exports.addingData = function (database, entry, word) {
  database.findOne({ name: word }, function (err, doc) {
    if (err) return console.log(err);
    if (doc) return console.log(`${doc.name} already exists`);

    entry.save((err) => {
      if (err) return res.status(500).send(err);
      return console.log(`${word} has been added to the database.`);
    });
  });
};
module.exports.deletingData = function (database, word) {
  database.findOne({ name: word }, function (err, doc) {
    if (doc) {
      database.deleteOne({ name: word }, function (err) {
        if (err) return console.log(err);
        console.log(`${word} has been deleted from database`);
      });
    }
    console.log(`${word} has not been find in the database`);
  });
};
