import React from 'react';
import { Link } from 'react-router-dom';
import { PagePath } from '../models/pages';

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <h1>404 - Page Not Found</h1>
        <Link to={PagePath.Home}>Please go Home</Link>
      </>
    );
  }
}

export default ErrorPage;
