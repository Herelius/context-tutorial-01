// App.js
import React from "react";
import MoviesList from "./components/MoviesList";
import MovieContext from "./contexts/MovieContext";

function App() {
  const [movies, setMovies] = React.useState([
    {
      movie_id: 1,
      title: "Harry Potter and the Sorcerers Stone",
      release_year: 2001
    },
    {
      movie_id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      release_year: 2002
    },
    {
      movie_id: 3,
      title: "Harry Potter and the Prison of Azkaban",
      release_year: 2004
    }
  ]);

  return (
    /* create a provider and set its value prop 
    to the movies from the state.
    don't forget to import our context and wrap 
    our MoviesList component with the provider!
    */
    <MovieContext.Provider value={{ movies: movies }}>
      <MoviesList />
    </MovieContext.Provider>
  );
}

export default App;
