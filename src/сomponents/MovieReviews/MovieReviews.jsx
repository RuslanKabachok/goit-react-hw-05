import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovies from '../../Components/api';

function MovieReviews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const movieReviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const response = await fetchMovies(movieReviewsUrl);
        setMovie(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieReviewsUrl]);

  return (
    <ul>
      {movie && movie.length > 0 ? (
        movie?.map((review) => (
          <li key={review.id}>
            <b>Author: {review.author}</b>
            <p> {review.content}</p>
          </li>
        ))
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ul>
  );
}

export default MovieReviews;
