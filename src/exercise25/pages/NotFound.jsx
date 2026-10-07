import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-2xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-3 rounded"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;