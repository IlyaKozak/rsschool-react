import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { pagePath } from '../../constants/constants';
import getObjKeyFromValue from '../../utils/getObjKeyFromValue';
import './HeaderNavigation.css';

const HeaderNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <h2>{getObjKeyFromValue(pagePath, location.pathname)}</h2>
      <nav>
        <ul>
          {(Object.keys(pagePath) as Array<keyof typeof pagePath>).map((page) => {
            return (
              <li key={page}>
                <NavLink to={pagePath[page]}>{page}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
