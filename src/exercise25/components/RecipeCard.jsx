import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition"
    >
      <h2 className="font-semibold text-lg mb-2">
        {recipe.title}
      </h2>

      <p className="text-gray-600 text-sm mb-4">
        {recipe.description}
      </p>

      <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded text-xs font-medium">
        {recipe.category}
      </span>
    </Link>
  );
}

export default RecipeCard;