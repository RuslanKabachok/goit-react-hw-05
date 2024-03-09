import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from '../Navigation/Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home page
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
