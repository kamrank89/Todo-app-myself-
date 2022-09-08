/* Express Calling */
const express = require("express");
const app = express();
const port = 3000;
const mongoosee = require("mongoose");

/* Importing mongoose Schema */

/* Importing mongoose Connection */
const mongoose = require("./mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

/* Mongoose Schema */
// mongooseSchema("newtest");
mongoose.mongooseConnect();
const test = mongoose.mongooseSchema("test");
const entry1 = new test({ name: "test1" });
const entry2 = new test({ name: "test2" });

mongoose.addingData(test, entry2, "test2");
mongoose.addingData(test, entry1, "test1");

/* Insert a sample document */
/* Create a new MongoClient */
const items = [];
/* Starting Express */
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
app.get("/", (req, res) => {
  test.find({}, function (err, docs) {
    res.render("index", { title: "Todo Items", items: docs });
  });
});

app.post("/", (req, res) => {
  const item = req.body.todo;
  const userEntry = new test({ name: item });
  mongoose.addingData(test, userEntry, item);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Todo-App is listening on port ${port}`);
});
