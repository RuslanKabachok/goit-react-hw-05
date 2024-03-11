import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../Components/MovieList/MovieList';
import fetchMovies from '../../Components/api';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const value = params.get('query') ?? '';

  const movieQuery = `https://api.themoviedb.org/3/search/movie?query=${query}include_adult=false&language=en-US&page=1`;

  useEffect(() => {
    async function searchMovies() {
      try {
        const response = await fetchMovies(movieQuery);
        setMovies(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    searchMovies();
  }, [movieQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
    setParams({ query: e.target.query.value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="query"
          value={value}
          onChange={(e) => setParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        <MovieList data={movies || []} />
      </ul>
    </div>
  );
}

export default MoviesPage;
