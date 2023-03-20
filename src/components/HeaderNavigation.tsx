import React from 'react';
import { NavLink } from 'react-router-dom';
import { PagePath, PagePathToName } from '../constants/pages';
import withRouter, { WithRouterProps } from '../hoc/withRouter';
import './HeaderNavigation.css';

class HeaderNavigation extends React.Component<WithRouterProps> {
  render() {
    const path = this.props.location.pathname as PagePath;

    return (
      <header>
        <h2>{PagePathToName[path]}</h2>
        <nav>
          <ul>
            <li>
              <NavLink to={PagePath.Home}>Home</NavLink>
            </li>
            <li>
              <NavLink to={PagePath.About}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderNavigation);
