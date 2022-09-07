/* Express Calling */
const express = require("express");
const app = express();
const port = 3000;
/* Mongoose calling */
const mongoose = require("mongoose");

const test = require("./mongoose");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

/* Using static files in express */
// const path = require("path");
// app.use(express.static(path.join(__dirname, "/public")));

const uri = "mongodb://localhost:27017/test";
mongoose.connect(uri).then(
  () => {
    console.log("Mongoose is connected");
  },
  (err) => {
    console.log(err);
  }
);

/* Mongoose Schema */
const test1 = new test({ name: "modulized" });
const test2 = new test({ name: "test2" });
test.findOne({ name: "modulized" }, function (err, doc) {
  if (err) return console.log(err);
  if (doc) return console.log(`${doc.name} already exists`);

  test1.save((err) => {
    if (err) return res.status(500).send(err);
    return console.log("new documnet has been added");
  });
});
test.findOne({ name: "test2" }, function (err, doc) {
  if (err) return console.log(err);
  if (doc) return console.log(`${doc.name} already exists`);

  test2.save((err) => {
    if (err) return res.status(500).send(err);
    return console.log("new documnet has been added");
  });
});

/* Insert a sample document */
/* Create a new MongoClient */

/* Starting Express */
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
app.get("/", (req, res) => {
  res.render("index", { title: "bugh bugh" });
});

// app.post("/", (req, res) => {
//   res.send(`your todo item is ${req.body.todo}`);
// });

app.listen(port, () => {
  console.log(`Todo-App is listening on port ${port}`);
});
