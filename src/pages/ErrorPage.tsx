import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Please go Home</Link>
    </>
  );
};

export default ErrorPage;
