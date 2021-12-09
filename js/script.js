const numberOfFilms = +prompt("сколько фильм посмотрели?", "")

const personalMoviesDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
};

const a = prompt("один из последних фильмов", ""),
      b = prompt("Оцените его?", ""),
      c = prompt("один из последних фильмов", ""),
      d = prompt("Оцените его?", "")

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB)
