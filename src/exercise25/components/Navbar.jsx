import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-xl font-bold text-pink-600"
        >
          Recipe Book
        </NavLink>

        <div className="flex gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-pink-600 font-semibold'
                : 'text-gray-600'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? 'text-pink-600 font-semibold'
                : 'text-gray-600'
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? 'text-pink-600 font-semibold'
                : 'text-gray-600'
            }
          >
            Categories
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;