import { useEffect, useState } from 'react';
import MovieList from '../../Components/MovieList/MovieList';
import fetchMovies from '../../Components/api';
import css from '../HomePage/HomePage.module.css';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const trendingMoviesUrl =
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMovies(trendingMoviesUrl);

        const results = response.results;
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <div className={css.container}>
        <h1>Trending today</h1>
        <MovieList data={trendingMovies} />
      </div>
    </>
  );
}

export default HomePage;
