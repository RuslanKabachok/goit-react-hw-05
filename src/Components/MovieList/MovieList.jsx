import { Link } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css';

function MovieList({ data }) {
  return data.map((movie) => {
    return (
      <li key={movie.id} className={css.item}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>
    );
  });
}

export default MovieList;
