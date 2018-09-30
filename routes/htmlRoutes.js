
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });

  app.get("/about-us", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about-us.html"));
  });

  app.get("/match", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/match.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/listAll", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/listAll.html"));
  });

};