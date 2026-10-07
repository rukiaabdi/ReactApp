import { Link } from 'react-router-dom';
import {  categories } from '../data';

function CategoryHome() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Choose a Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md"
          >

            <h3 className="text-lg font-bold">
              {category.name}
            </h3>

            <p className="text-gray-600 mt-2">
              {category.description}
            </p>

          </Link>
        ))}

      </div>

    </div>
  );
}

export default CategoryHome;