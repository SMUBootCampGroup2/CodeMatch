// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
// GET route for getting all of the students or tutors
app.get("/api/users", function(req, res) {
    var query = {};
    // if (req.query.is_student) {
    //     query.is_student = req.query.is_student;
    // } else {
    //     query.is_student != req.query.is_student;
    // }
    db.users.findAll({
        where: query
    }).then(function(dbPost) {
        res.json(dbPost);
    });
});

// GET route for getting all of the tutors //enable if the if/else doesn't work
// app.get("/api/tutor/person", function(req, res) {
//     var query = {};
//     if (!req.query.is_student) {
//         query.is_student != req.query.is_student;
//     }
//     db.Questions.findAll({
//         where: query
//     }).then(function(dbPost) {
//         res.json(dbPost);
//     });
// });

// Get route for retrieving a single student
app.get("/api/student/:id", function(req, res) {
    db.Users.findOne({
    where: {
        id: req.params.id
    }
    }).then(function(dbPost) {
    res.json(dbPost);
    });
});

// Get route for retrieving a single tutor
app.get("/api/tutor/:id", function(req, res) {
    db.Users.findOne({
    where: {
        id: req.params.id
    }
    }).then(function(dbPost) {
    res.json(dbPost);
    });
});

  // POST route for saving a new student or tutor
  app.post("/api/person/questions", function(req, res) {
    db.Users.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
}
