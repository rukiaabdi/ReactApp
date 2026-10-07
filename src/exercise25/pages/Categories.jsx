import { NavLink, Outlet } from "react-router-dom";
import { categories } from "../data";

function Categories() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Recipe Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold mb-4">
            Categories
          </h2>

          <div className="flex flex-col gap-2">
            <NavLink
              to="/categories"
              end
              className={({ isActive }) =>
                `p-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "text-gray-600"
                }`
              }
            >
              All Categories
            </NavLink>

            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/categories/${category.id}`}
                className={({ isActive }) =>
                  `p-2 rounded ${
                    isActive
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-600"
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </aside>

        <main className="md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Categories;