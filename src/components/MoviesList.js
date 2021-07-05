import React, { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

function MoviesList() {
  /* using the useContext hook, consume the MovieContext.
  don't forget to import the hook and the context! */
  const { movies } = useContext(MovieContext);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.movie_id}>
            {movie.title}, released on {movie.release_year}
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
