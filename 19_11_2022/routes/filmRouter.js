module.exports = app => {
  const filmController = require("../controllers/FilmController");

  const router = require("express").Router();

  // Retrieve all films
  router.get("/", filmController.getAllFilms);

  // Update a film
  router.put("/:id/update", filmController.updateFilm);

  app.use('/api/films', router);
};
