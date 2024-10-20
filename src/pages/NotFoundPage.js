import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
