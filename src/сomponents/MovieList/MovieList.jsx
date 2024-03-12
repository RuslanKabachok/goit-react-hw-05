import { Link, useLocation } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css';

function MovieList({ data }) {
  const location = useLocation();

  return data.map((movie) => {
    return (
      <li key={movie.id} className={css.item}>
        <Link to={`/movies/${movie.id}`} state={location}>
          {movie.title}
        </Link>
      </li>
    );
  });
}

export default MovieList;
