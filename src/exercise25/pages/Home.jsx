import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-12">

      <h1 className="text-4xl font-bold mb-4">
        Welcome to Recipe Book
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Discover delicious recipes and start cooking today!
      </p>

      <div className="flex justify-center gap-6">

        <Link
          to="/recipes"
          className="bg-pink-600 text-white rounded-lg px-16 py-8 shadow-md hover:bg-pink-700"
        >
          <h2 className="text-2xl font-bold mb-2">
            Browse Recipes
          </h2>

          <p>
            Explore our collection of delicious recipes
          </p>
        </Link>

        <Link
          to="/categories"
          className="bg-pink-600 text-white rounded-lg px-16 py-8 shadow-md hover:bg-pink-700"
        >
          <h2 className="text-2xl font-bold mb-2">
            Recipe Categories
          </h2>

          <p>
            Find recipes by category
          </p>
        </Link>

      </div>
    </div>
  );
}

export default Home;