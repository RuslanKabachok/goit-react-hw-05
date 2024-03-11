import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../Components/MovieList/MovieList';
import fetchMovies from '../../Components/api';

function MoviesPage() {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const value = params.get('query') ?? '';

  async function getSearchedMovies(e) {
    try {
      const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?query=${value}`;
      e.preventDefault();
      const response = await fetchMovies(searchMoviesUrl);
      setMovies(response.results);
      setParams({ query: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (newValue) => {
    params.set('query', newValue);
    setParams({ query: newValue });
  };

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
          value={value}
          onChange={(e) => handleChange(e.target.value)}
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
