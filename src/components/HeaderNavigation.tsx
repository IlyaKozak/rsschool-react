import { NavLink, useLocation } from 'react-router-dom';

function HeaderNavigation() {
  const location = useLocation();

  return (
    <header>
      <h2>{location.pathname === '/' ? 'Home' : 'About'}</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNavigation;
