import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '../../Components/api';
import css from '../MovieCast/MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const movieCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMoviesCast() {
      try {
        const response = await fetchMovies(movieCastUrl);
        setMovie(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesCast();
  }, [movieCastUrl]);

  return (
    <ul>
      {movie?.map((actor) => (
        <li key={actor.id} className={css.item}>
          {actor.name}
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
            alt=""
          />
          <span>Character: {actor.character}</span>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
