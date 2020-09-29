const express = require("express");
const path = require("path");

module.exports = function (app) {
  app.use("/", express.static(path.resolve(__dirname, "../../public")));
  app.set("views", path.resolve(__dirname, "../views"));

  app.use("/", express.static("public"));
  app.use(express.static("files"));
  app.use("views", express.static("src/views"));
};
