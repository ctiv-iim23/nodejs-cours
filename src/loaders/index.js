const expressLoader = require("./express");
const ejsLoader = require("./ejs");
const mongooseLoader = require("./mongoose");

module.exports = async function (app) {
  expressLoader(app);
  ejsLoader(app);
  await mongooseLoader(app);

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/post", (req, res) => {
    res.render("show");
  });
};
