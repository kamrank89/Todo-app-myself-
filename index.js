/* Express Calling */
const express = require("express");
const app = express();
const port = 3000;

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
// mongoose.deletingData(test, "test1");
// mongoose.deletingData(test, "test2");
// const entry1 = new newtest({ name: "entry1" });
// });
// test.findOne({ name: "test1" }, function (err, doc) {
//   if (err) return console.log(err);
//   if (doc) return console.log(`${doc.name} already exists`);

//   entry1.save((err) => {
//     if (err) return res.status(500).send(err);
//     return console.log("new documnet has been added");
//   });
// });

/* Insert a sample document */
/* Create a new MongoClient */
const items = [];
/* Starting Express */
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
app.get("/", (req, res) => {
  res.render("index", { title: "Todo Items", items: items });
});

app.post("/", (req, res) => {
  var item = req.body.todo;
  items.push(item);
  console.log(`${req.body.todo} has been added`);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Todo-App is listening on port ${port}`);
});
