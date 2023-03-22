import React from 'react';
import { NavLink } from 'react-router-dom';

import withRouter, { WithRouterProps } from '../../hoc/withRouter';
import { pagePath } from '../../constants/constants';
import getObjKeyFromValue from '../../utils/getObjKeyFromValue';
import './HeaderNavigation.css';

class HeaderNavigation extends React.Component<WithRouterProps> {
  render() {
    const path = this.props.location.pathname;

    return (
      <header>
        <h2>{getObjKeyFromValue(pagePath, path)}</h2>
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
  }
}

export default withRouter(HeaderNavigation);
