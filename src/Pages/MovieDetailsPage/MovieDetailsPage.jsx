import { NavLink, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import fetchMovies from '../../Components/api';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const moviesByIdUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMoviesById() {
      try {
        const response = await fetchMovies(moviesByIdUrl);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesById();
  }, [moviesByIdUrl]);

  return (
    <div>
      <NavLink to="/" className={css.backLink}>
        <BiArrowBack />
        Back to home page
      </NavLink>
      <div className={css.card}>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className={css.info}>
          <h1>{movie?.title}</h1>
          <p>User score: {Math.round(movie?.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie?.genres.map((genre) => (
              <span className={css.genre} key={genre.id}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className={css.infoContainer}>
        <p>Additional information</p>
        <ul className={css.infoList}>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;
