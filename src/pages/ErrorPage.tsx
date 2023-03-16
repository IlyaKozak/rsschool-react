import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <h1>404 - Page Not Found</h1>
        <Link to="/">Please go Home</Link>
      </>
    );
  }
}

export default ErrorPage;
