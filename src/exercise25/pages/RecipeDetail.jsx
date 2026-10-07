import { Link, useParams } from "react-router-dom";
import { recipes } from "../data";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold">
          Recipe not found
        </h1>

        <Link
          to="/recipes"
          className="text-pink-600 mt-4 inline-block"
        >
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link
        to="/recipes"
        className="text-pink-600 mb-6 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {recipe.description}
        </p>

        <p className="text-pink-600 font-bold mb-8">
          Category: {recipe.category}
        </p>

        <h2 className="text-xl font-bold mb-4">
          Ingredients
        </h2>

        <ul className="list-disc ml-6 mb-8">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4">
          Instructions
        </h2>

        <ol className="list-decimal ml-6">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;