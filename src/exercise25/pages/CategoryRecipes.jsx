import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Recipe Book
        </h1>

        <p className="text-gray-600">
          Discover delicious recipes and find your next favorite meal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/recipes"
          className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">
            Browse Recipes
          </h2>

          <p className="text-gray-600">
            View all our delicious recipes.
          </p>
        </Link>

        <Link
          to="/categories"
          className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">
            Browse Categories
          </h2>

          <p className="text-gray-600">
            Find recipes by category.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;