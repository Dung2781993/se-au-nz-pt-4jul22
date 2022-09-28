"use strict";

const Movie = require("../models/appModel.js");

exports.list_all_movies = function (req, res) {
  Movie.getAllMovie(function (err, movie) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", movie);
    res.send(movie);
  });
};

exports.create_a_movie = function (req, res) {
  var new_movie = new Movie(req.body);

  //handles null error
  if (
    !new_movie.title ||
    !new_movie.genre ||
    !new_movie.director ||
    !new_movie.release_year
  ) {
    res.status(400).send({
      error: true,
      message: "Please provide title/genre/director/release_year",
    });
  } else {
    Movie.createMovie(new_movie, function (err, movie) {
      if (err) res.send(err);
      res.json(movie);
    });
  }
};

exports.read_a_movie = function (req, res) {
  Movie.getMovieById(req.params.id, function (err, movie) {
    if (err) res.send(err);
    res.json(movie);
  });
};

exports.update_a_movie = function (req, res) {
  Movie.updateById(req.params.id, new Task(req.body), function (err, movie) {
    if (err) res.send(err);
    res.json(movie);
  });
};

exports.delete_a_task = function (req, res) {
  Task.remove(req.params.taskId, function (err, task) {
    if (err) res.send(err);
    res.json({ message: "Task successfully deleted" });
  });
};
