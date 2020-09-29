const express = require("express");
const { callbackify } = require("util");
const path = require("path");
const app = express();
const port = 3000;

app.use("/", express.static(path.resolve(__dirname, "../public")));
app.set("views", path.resolve(__dirname, "views"));

app.use("/", express.static("public"));
app.use(express.static("files"));
app.use("views", express.static("src/views"));

app.engine("ejs", require("ejs").__express);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/post", (req, res) => {
  res.render("show");
});

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
