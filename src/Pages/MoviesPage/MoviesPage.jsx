import { useState } from 'react';
import MovieList from '../../Components/MovieList/MovieList';
import fetchMovies from '../../Components/api';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  async function getSearchedMovies(e) {
    try {
      const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?query=${query}`;
      e.preventDefault();
      setQuery(e.target.query.value);
      const response = await fetchMovies(searchMoviesUrl);
      setMovies(response.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          getSearchedMovies(e);
        }}
      >
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        <MovieList data={movies} />
      </ul>
    </div>
  );
}

export default MoviesPage;