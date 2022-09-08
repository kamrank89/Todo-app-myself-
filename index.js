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
app.use(express.static(__dirname + "/public"));

/* Mongoose Schema */
// mongooseSchema("newtest");
mongoose.mongooseConnect();
const test = mongoose.mongooseSchema("test");

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
app.post("/delete", (req, res) => {
  const checkeditem = req.body.checkbox;
  mongoose.deletingDataById(test, checkeditem);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Todo-App is listening on port ${port}`);
});
