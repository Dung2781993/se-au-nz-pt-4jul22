const db = require("../connection/dbConnect");

// constructor
const Film = function (film) {
  this.id = film.film_id;
  this.title = film.title;
  this.description = film.description;
  this.release_year = film.release_year;
  this.rental_duration = film.rental_duration;
  this.rental_rate = film.rental_rate;
  this.length = film.length;
  this.replacement_cost = film.replacement_cost;
  this.rating = film.rating;
  this.special_features = film.special_features;
  this.last_update = film.last_update;
  this.language = film.movie_language;
};

Film.getAllFilms = (req, result) => {
  let numPerPage = parseInt(req.query.limit, 10) || 10;
  let page = parseInt(req.query.page - 1) || 0;
  let skip = page * numPerPage;
  let limit = skip + "," + numPerPage;
  return new Promise((resolve, reject) => {
    let query = `SELECT
        film.film_id,
        film.title,
        film.description,
        film.release_year,
        film.rental_duration,
        film.rental_rate,
        film.length,
        film.replacement_cost,
        film.rating,
        film.special_features,
        film.last_update,
        film.language_id,
        language.name as movie_language
      FROM film, language
      Where film.language_id = language.language_id
      limit ` + limit;
    console.log(query);
    db.query(query, (err, res) => {
      if (err) {
        reject(new Error("Unable to select all film"));
      }
      let result = [];
      if(res.length > 0 ) {
        res.forEach(item => {
            result.push(new Film(item))
        })
      }

      resolve({
        message: "Get all films successfully",
        success: true,
        data: result,
      });
    });
  });
};

Film.updateFilm = (req, result) => {
  let filmId = req.params.id;
  if(!filmId) {
    throw new Error("Unable to get the file Id");
  }
  let body = req.body;
  let release_year = body.release_year
  return new Promise((resolve, reject) => {
    let query = `UPDATE film
        SET release_year = ${release_year}
        WHERE film_id = ${filmId}`;
    console.log(query);
    db.query(query, (err, res) => {
      if (err) {
        reject(new Error("Unable to update film"));
      }

      resolve({
        message: "Update successfully",
        success: true,
        data: res,
      });
    });
  });
};

module.exports = Film;
