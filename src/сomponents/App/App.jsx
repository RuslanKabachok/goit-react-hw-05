import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Navigation = lazy(() => import('../../Components/Navigation/Navigation'));
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../Pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage')
);
const MovieDetailsPage = lazy(() =>
  import('../../Pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
