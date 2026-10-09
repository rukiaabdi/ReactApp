
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search').trim();

    navigate(search ? `/?search=${encodeURIComponent(search)}` : '/');
  };

  return (
    <section>
      <h2 className="mb-1 text-xl font-medium">Blog Posts</h2>

      {isAuthenticated && (
        <Link
          to="/create"
          className="mb-4 inline-block rounded bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
        >
          + Create Post
        </Link>
      )}

      <form onSubmit={handleSearch} className="mb-5 max-w-2xl">
        <input type="text" name="search"
          placeholder="Search posts" defaultValue={searchTerm}
          className="mb-3 w-full rounded border border-slate-300 px-3 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />

        <div className="flex gap-3">
          <button type="submit" className="flex-1 rounded bg-sky-600 px-4 py-3 text-white hover:bg-sky-700" >
            Search
          </button>

          {searchTerm && (
            <button type="button" onClick={() => navigate('/')}
              className="rounded bg-slate-200 px-4 py-3 text-slate-700 hover:bg-slate-300"
            >
              Clear
            </button>
          )}
        </div>
      </form>

      {filteredPosts.length > 0 ? (
        <ul className="space-y-3">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/posts/${post.id}`}
                className="font-medium text-sky-600 hover:text-sky-800 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500">No posts found.</p>
      )}
    </section>
  );
};

export default Home;