/* Express Calling */
const express = require("express");
const app = express();
const port = 3000;
/* Mongo calling */
const run = require("./mongodb");

run().catch(console.dir);

/* Insert a sample document */
/* Create a new MongoClient */

/* Using static files in express */
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));

/* Starting Express */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Todo-App is listening on port ${port}`);
});
