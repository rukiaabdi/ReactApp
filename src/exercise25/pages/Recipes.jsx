import { Link } from "react-router-dom";
import { recipes } from "../data";

function Recipes() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">
        All Recipes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-bold mb-2">
              {recipe.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {recipe.description}
            </p>

            <p className="text-pink-600 font-medium mb-4">
              Category: {recipe.category}
            </p>

            <Link
              to={`/recipes/${recipe.id}`}
              className="inline-block bg-pink-500 text-white px-4 py-2 rounded"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;