import { Routes, Route } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import HomePage from '../../Pages/HomePage/HomePage';

import MoviesPage from '../../Pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
