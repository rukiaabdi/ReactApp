
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Page Not Found</h2>

      <p>
        {error?.statusText || error?.message ||
          'Sorry, this page does not exist.'}
      </p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;