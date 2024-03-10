import { Routes, Route } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import HomePage from '../../Pages/HomePage/HomePage';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from '../../Pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
