import React from 'react';
import { Link } from 'react-router-dom';
import { pagePath } from '../constants/constants';

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <h1>404 - Page Not Found</h1>
        <Link to={pagePath.Home}>Please go Home</Link>
      </>
    );
  }
}

export default ErrorPage;
