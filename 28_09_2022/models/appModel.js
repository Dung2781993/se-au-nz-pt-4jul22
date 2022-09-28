'user strict';
const sql = require('./db.js');

//Task object constructor
const Movie = function(movie){
    console.log(movie);
    this.id = movie.id;
    this.title = movie.title;
    this.genre = task.genre;
    this.director = task.director;
    this.release_year = task.release_year;
};
Movie.getMovieById = function getMovieById(id, result) {
    sql.query(`Select * from movie where id = ${id}`, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Movie.getAllMovie = function getAllMovie(result) {
    sql.query("Select * from movie", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Movie.createMovie = function(params, result) {
    
}

module.exports= Movie;