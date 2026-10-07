import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./exercise25/pages/Home";
import Recipes from "./exercise25/pages/Recipes";
import RecipeDetail from "./exercise25/pages/RecipeDetail";
import Categories from "./exercise25/pages/Categories";
import CategoryRecipes from "./exercise25/pages/CategoryRecipes";
import NotFound from "./exercise25/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/:id",
        element: <RecipeDetail />,
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            index: true,
            element: (
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Select a category
                </h2>
                <p className="text-gray-600">
                  Choose a category from the sidebar.
                </p>
              </div>
            ),
          },
          {
            path: ":categoryId",
            element: <CategoryRecipes />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;